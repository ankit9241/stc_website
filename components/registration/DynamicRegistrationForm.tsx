"use client";
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Loader2, CheckCircle2 } from 'lucide-react';
import { uploadToImageKit } from '@/lib/imagekit';
import Link from 'next/link';

interface FieldOption {
  label: string;
  value: string;
}

interface Field {
  key: string;
  label: string;
  type: string;
  placeholder?: string;
  required: boolean;
  important: boolean;
  options?: FieldOption[];
  order: number;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    maxLength?: number;
    minLength?: number;
    customMessage?: string;
  };
  conditional?: {
    fieldKey: string;
    operator: string;
    value: any;
  };
  emailRestriction?: 'all' | 'iitp';
  imageFolder?: string;
  maxFileSize?: number;
}

interface Template {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  fields: Field[];
}

interface DynamicRegistrationFormProps {
  slug: string;
}

export default function DynamicRegistrationForm({ slug }: DynamicRegistrationFormProps) {
  const [template, setTemplate] = useState<Template | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: any }>({});
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [uploadingImages, setUploadingImages] = useState<{ [key: string]: boolean }>({});

  // OTP verification states
  const [emailField, setEmailField] = useState<Field | null>(null);
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [otp, setOtp] = useState('');
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifyingOtp, setVerifyingOtp] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);

  useEffect(() => {
    fetchTemplate();
  }, [slug]);

  useEffect(() => {
    if (otpTimer > 0) {
      const timer = setTimeout(() => setOtpTimer(otpTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [otpTimer]);

  const fetchTemplate = async () => {
    try {
      const response = await fetch(`/api/registration/${slug}`);
      if (response.ok) {
        const data = await response.json();
        setTemplate(data);
        
        const initialData: { [key: string]: any } = {};
        data.fields.forEach((field: Field) => {
          if (field.type === 'checkbox') {
            initialData[field.key] = [];
          } else {
            initialData[field.key] = '';
          }
        });
        setFormData(initialData);

        // Find email field
        const emailFld = data.fields.find((f: Field) => f.type === 'email');
        setEmailField(emailFld || null);
      }
    } catch (error) {
      console.error('Error fetching template:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendOTP = async () => {
    if (!emailField || !formData[emailField.key]) {
      if (emailField) {
        setErrors({ ...errors, [emailField.key]: 'Email is required for verification' });
      }
      return;
    }

    const email = formData[emailField.key];

    // Validate email domain if restricted
    if (emailField.emailRestriction === 'iitp' && !email.toLowerCase().endsWith('@iitp.ac.in')) {
      setErrors({ ...errors, [emailField.key]: 'Only @iitp.ac.in email addresses are allowed' });
      return;
    }

    setSendingOtp(true);
    try {
      const response = await fetch('/api/registration/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email.trim().toLowerCase(), 
          registrationSlug: slug 
        })
      });

      if (response.ok) {
        setOtpSent(true);
        setOtpTimer(330); // 5 minutes 30 seconds
        setErrors({ ...errors, [emailField.key]: '' });
      } else {
        const error = await response.json();
        setErrors({ ...errors, [emailField.key]: error.error });
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      setErrors({ ...errors, [emailField.key]: 'Failed to send OTP' });
    } finally {
      setSendingOtp(false);
    }
  };

  const verifyOTP = async () => {
    if (!emailField || !otp) {
      return;
    }

    setVerifyingOtp(true);
    try {
      const response = await fetch('/api/registration/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: formData[emailField.key]?.trim().toLowerCase(), 
          otp: otp.trim() 
        })
      });

      if (response.ok) {
        setOtpVerified(true);
        setOtpSent(false);
        setOtp('');
      } else {
        const error = await response.json();
        alert(error.error);
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      alert('Failed to verify OTP');
    } finally {
      setVerifyingOtp(false);
    }
  };

  const shouldShowField = (field: Field): boolean => {
    // Check if this is a team member field
    const teamSizeMatch = field.key.match(/^member-(\d+)-/);
    if (teamSizeMatch) {
      const memberNumber = parseInt(teamSizeMatch[1]);
      const teamSize = formData['hackathon-team-field'];
      
      // Only show member fields up to the selected team size
      if (!teamSize || memberNumber > parseInt(teamSize)) {
        return false;
      }
    }

    if (!field.conditional) return true;

    const { fieldKey, operator, value } = field.conditional;
    const fieldValue = formData[fieldKey];

    switch (operator) {
      case '==':
        return fieldValue === value;
      case '!=':
        return fieldValue !== value;
      case 'in':
        return Array.isArray(value) && value.includes(fieldValue);
      case 'notin':
        return Array.isArray(value) && !value.includes(fieldValue);
      case '>':
        return Number(fieldValue) > Number(value);
      case '<':
        return Number(fieldValue) < Number(value);
      default:
        return true;
    }
  };

  const handleChange = (key: string, value: any) => {
    setFormData({ ...formData, [key]: value });
    if (errors[key]) {
      setErrors({ ...errors, [key]: '' });
    }

    // Reset OTP verification if email changes
    if (emailField && key === emailField.key && otpVerified) {
      setOtpVerified(false);
      setOtpSent(false);
    }
  };

  const handleCheckboxChange = (key: string, value: string, checked: boolean) => {
    const currentValues = formData[key] || [];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter((v: string) => v !== value);
    handleChange(key, newValues);
  };

  const handleImageUpload = async (key: string, file: File, field: Field) => {
    if (!file) return;

    const maxSize = (field.maxFileSize || 5) * 1024 * 1024; // Convert MB to bytes
    if (file.size > maxSize) {
      setErrors({ ...errors, [key]: `File size must be less than ${field.maxFileSize || 5}MB` });
      return;
    }

    setUploadingImages({ ...uploadingImages, [key]: true });
    try {
      const fileName = `${Date.now()}_${file.name}`;
      const result = await uploadToImageKit(file, fileName);
      handleChange(key, result.url);
      setErrors({ ...errors, [key]: '' });
    } catch (error) {
      console.error('Image upload error:', error);
      setErrors({ ...errors, [key]: 'Failed to upload image' });
    } finally {
      setUploadingImages({ ...uploadingImages, [key]: false });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    template?.fields.forEach((field) => {
      if (!shouldShowField(field)) return;

      const value = formData[field.key];

      if (field.required && !value) {
        newErrors[field.key] = `${field.label} is required`;
        return;
      }

      if (value && field.validation) {
        if (field.validation.minLength && value.length < field.validation.minLength) {
          newErrors[field.key] = field.validation.customMessage || `Minimum length is ${field.validation.minLength}`;
        }
        if (field.validation.maxLength && value.length > field.validation.maxLength) {
          newErrors[field.key] = field.validation.customMessage || `Maximum length is ${field.validation.maxLength}`;
        }
        if (field.validation.pattern) {
          const regex = new RegExp(field.validation.pattern);
          if (!regex.test(value)) {
            newErrors[field.key] = field.validation.customMessage || 'Invalid format';
          }
        }
        if (field.type === 'number') {
          const numValue = Number(value);
          if (field.validation.min !== undefined && numValue < field.validation.min) {
            newErrors[field.key] = `Minimum value is ${field.validation.min}`;
          }
          if (field.validation.max !== undefined && numValue > field.validation.max) {
            newErrors[field.key] = `Maximum value is ${field.validation.max}`;
          }
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (emailField && !otpVerified) {
      alert('Please verify your email with OTP before submitting');
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch('/api/registration/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          registrationSlug: slug,
          data: formData,
          emailVerified: otpVerified
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({});
      } else {
        const error = await response.json();
        if (error.errors) {
          setErrors(error.errors);
        } else {
          alert(error.error || 'Failed to submit registration');
        }
      }
    } catch (error) {
      console.error('Error submitting registration:', error);
      alert('Failed to submit registration');
    } finally {
      setSubmitting(false);
    }
  };

  const renderField = (field: Field) => {
    if (!shouldShowField(field)) return null;

    const commonProps = {
      id: field.key,
      disabled: submitting || (field.type === 'email' && emailField?.key === field.key && otpVerified)
    };

    return (
      <div key={field.key} className="space-y-2">
        <Label htmlFor={field.key}>
          {field.label}
          {field.required && <span className="text-red-500 ml-1">*</span>}
          {field.important && <span className="text-yellow-500 ml-1 font-bold">⚠</span>}
        </Label>

        {/* Email field with OTP verification */}
        {field.type === 'email' && emailField?.key === field.key && (
          <div className="space-y-2">
            <div className="flex gap-2">
              <Input
                {...commonProps}
                type="email"
                value={formData[field.key] || ''}
                onChange={(e) => handleChange(field.key, e.target.value)}
                placeholder={field.placeholder}
                className={errors[field.key] ? 'border-red-500' : otpVerified ? 'border-green-500' : ''}
              />
              {otpVerified ? (
                <Button type="button" disabled className="bg-green-500">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  Verified
                </Button>
              ) : (
                <Button
                  type="button"
                  onClick={sendOTP}
                  disabled={sendingOtp || !formData[field.key] || otpTimer > 0}
                >
                  {sendingOtp && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  {otpTimer > 0 ? `Resend (${Math.floor(otpTimer / 60)}:${(otpTimer % 60).toString().padStart(2, '0')})` : 'Send OTP'}
                </Button>
              )}
            </div>
            {field.emailRestriction === 'iitp' && (
              <p className="text-xs text-blue-500">Only @iitp.ac.in email addresses are allowed</p>
            )}
            {otpSent && !otpVerified && (
              <div className="flex gap-2 mt-2">
                <Input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                />
                <Button type="button" onClick={verifyOTP} disabled={verifyingOtp || otp.length !== 6}>
                  {verifyingOtp && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                  Verify
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Image upload field */}
        {field.type === 'image' && (
          <div className="space-y-2">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleImageUpload(field.key, file, field);
              }}
              disabled={submitting || uploadingImages[field.key]}
              className={errors[field.key] ? 'border-red-500' : ''}
            />
            {uploadingImages[field.key] && (
              <div className="flex items-center text-sm text-gray-500">
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </div>
            )}
            {formData[field.key] && !uploadingImages[field.key] && (
              <div className="mt-2">
                <img src={formData[field.key]} alt="Preview" className="max-w-xs rounded border" />
              </div>
            )}
            <p className="text-xs text-gray-500">Max file size: {field.maxFileSize || 5} MB</p>
          </div>
        )}

        {/* Regular fields */}
        {field.type !== 'email' && field.type !== 'image' && field.type === 'textarea' && (
          <Textarea
            {...commonProps}
            value={formData[field.key] || ''}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={errors[field.key] ? 'border-red-500' : ''}
          />
        )}

        {field.type === 'select' && (
          <Select
            value={formData[field.key] || ''}
            onValueChange={(value) => handleChange(field.key, value)}
            disabled={submitting}
          >
            <SelectTrigger className={errors[field.key] ? 'border-red-500' : ''}>
              <SelectValue placeholder={field.placeholder || 'Select...'} />
            </SelectTrigger>
            <SelectContent>
              {field.options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}

        {field.type === 'radio' && (
          <RadioGroup
            value={formData[field.key] || ''}
            onValueChange={(value) => handleChange(field.key, value)}
            disabled={submitting}
          >
            {field.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={`${field.key}-${option.value}`} />
                <Label htmlFor={`${field.key}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {field.type === 'checkbox' && (
          <div className="space-y-2">
            {field.options?.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <Checkbox
                  id={`${field.key}-${option.value}`}
                  checked={(formData[field.key] || []).includes(option.value)}
                  onCheckedChange={(checked) => handleCheckboxChange(field.key, option.value, checked as boolean)}
                  disabled={submitting}
                />
                <Label htmlFor={`${field.key}-${option.value}`}>{option.label}</Label>
              </div>
            ))}
          </div>
        )}

        {/* Other email fields (not the primary OTP-verified email) */}
        {field.type === 'email' && emailField?.key !== field.key && (
          <Input
            {...commonProps}
            type="email"
            value={formData[field.key] || ''}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={errors[field.key] ? 'border-red-500' : ''}
          />
        )}

        {!['textarea', 'select', 'radio', 'checkbox', 'email', 'image'].includes(field.type) && (
          <Input
            {...commonProps}
            type={field.type}
            value={formData[field.key] || ''}
            onChange={(e) => handleChange(field.key, e.target.value)}
            placeholder={field.placeholder}
            className={errors[field.key] ? 'border-red-500' : ''}
            min={field.validation?.min}
            max={field.validation?.max}
            maxLength={field.validation?.maxLength}
            minLength={field.validation?.minLength}
          />
        )}

        {errors[field.key] && (
          <p className="text-sm text-red-500">{errors[field.key]}</p>
        )}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!template) {
    return (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="pt-6">
          <p className="text-center text-red-500">Registration form not found or inactive</p>
        </CardContent>
      </Card>
    );
  }

  if (submitted) {
    return (
      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="pt-6 text-center space-y-4">
          <div className="text-6xl">✓</div>
          <h2 className="text-2xl font-bold text-green-600">Registration Successful!</h2>
          <p className="text-gray-600">Your registration has been submitted successfully.</p>
          <Button onClick={() => { setSubmitted(false); fetchTemplate(); setOtpVerified(false); }}>
            Submit Another Registration
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto mt-8">
      <CardHeader>
        <CardTitle>{template.name}</CardTitle>
        {template.description && (
          <CardDescription>{template.description}</CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {(() => {
            const sortedFields = template.fields.sort((a, b) => a.order - b.order);
            const teamSize = formData['hackathon-team-field'] ? parseInt(formData['hackathon-team-field']) : 0;
            const renderedFields: React.ReactNode[] = [];
            
            // Group fields by member number
            const memberFieldGroups: { [key: number]: Field[] } = {};
            const regularFields: Field[] = [];
            
            sortedFields.forEach(field => {
              const memberMatch = field.key.match(/^member-(\d+)-(.+)$/);
              if (memberMatch) {
                const memberNum = parseInt(memberMatch[1]);
                if (!memberFieldGroups[memberNum]) {
                  memberFieldGroups[memberNum] = [];
                }
                memberFieldGroups[memberNum].push(field);
              } else {
                regularFields.push(field);
              }
            });
            
            // Render regular fields first
            regularFields.forEach(field => {
              renderedFields.push(renderField(field));
            });
            
            // Render team member sections if team size is selected
            if (teamSize > 0) {
              for (let i = 1; i <= teamSize; i++) {
                const memberFields = memberFieldGroups[i];
                if (memberFields && memberFields.length > 0) {
                  renderedFields.push(
                    <div key={`member-section-${i}`} className="border rounded-lg p-4 space-y-4 bg-gray-50">
                      <h3 className="font-semibold text-lg text-gray-700">Team Member {i}</h3>
                      {memberFields.map(field => renderField(field))}
                    </div>
                  );
                }
              }
            }
            
            return renderedFields;
          })()}

          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={submitting || (emailField !== null && !otpVerified)}>
              {submitting && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
              Submit Registration
            </Button>
          </div>
        </form>
      </CardContent>

        <CardContent className="pt-4 border-t ">
          <p className="text-sm text-gray-600">
            If you are facing any issues, please  <Link href='/contact' className='text-blue-400 underline hover:text-blue-600'>contact us.</Link>.
          </p>
        </CardContent>
      </Card>
  );
}
