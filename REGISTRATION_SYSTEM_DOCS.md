# Custom Registration Forms System

## Overview
A complete custom registration forms system with admin control, OTP email verification, image uploads via ImageKit, and drag-and-drop field ordering.

## ✨ Features

### Admin Features
- **Form Builder with Drag-and-Drop**: Create custom registration forms with 12 field types
- **Email Domain Restriction**: Choose between "All Emails" or "@iitp.ac.in only" for email fields
- **Image Upload Support**: ImageKit integration for image fields
- **Field Validation**: Regex patterns, min/max length, min/max values
- **Conditional Fields**: Show/hide fields based on other field values
- **Mandatory Fields**: name, email, phone, semester (protected from deletion)
- **Form Templates**: Save, edit, delete registration form templates
- **Submissions Management**: View, approve/reject, delete submissions
- **CSV Export**: Export submissions data for analysis

### Public Features
- **OTP Email Verification**: Email verification with 6-digit OTP before submission
- **Image Upload**: Upload images to ImageKit directly from form
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Real-time Validation**: Client-side and server-side validation
- **Conditional Display**: Fields show/hide based on user inputs
- **Success Messages**: Clear feedback on submission

## 🏗️ Architecture

### Schemas
1. **RegistrationTemplateSchema** (`schema/RegistrationTemplateSchema.ts`)
   - Stores form templates
   - Fields: name, slug, description, fields[], active
   - Field types: text, email, tel, number, date, time, url, textarea, select, radio, checkbox, image

2. **RegistrationSubmissionSchema** (`schema/RegistrationSubmissionSchema.ts`)
   - Stores form submissions
   - Fields: registrationTemplateId, registrationSlug, data{}, status, metadata{}
   - Status: pending, approved, rejected

### API Routes

#### Admin Routes (Protected)
- `GET /api/admin/registration-templates` - Get all templates
- `POST /api/admin/registration-templates` - Create template
- `PUT /api/admin/registration-templates` - Update template
- `DELETE /api/admin/registration-templates` - Delete template
- `GET /api/admin/registration-submissions` - Get submissions (filterable)
- `PUT /api/admin/registration-submissions` - Update submission status
- `DELETE /api/admin/registration-submissions` - Delete submission

#### Public Routes
- `GET /api/registration/[slug]` - Get active form template by slug
- `POST /api/registration/send-otp` - Send OTP to email (with domain restriction check)
- `POST /api/registration/verify-otp` - Verify OTP code
- `POST /api/registration/submit` - Submit registration (requires OTP verification)

### Components

1. **RegistrationBuilder** (`components/admin/RegistrationBuilder.tsx`)
   - Create/edit form templates
   - Drag-and-drop field reordering
   - Field editor modal
   - Preview mode
   - Email domain selector (All / @iitp.ac.in only)
   - Image upload configuration

2. **DynamicRegistrationForm** (`components/registration/DynamicRegistrationForm.tsx`)
   - Renders form from template
   - OTP email verification flow
   - Image upload to ImageKit
   - Conditional field display
   - Real-time validation

3. **RegistrationSubmissionsViewer** (`components/admin/SubmissionsViewer.tsx`)
   - View all submissions
   - Filter by form and status
   - Approve/reject submissions
   - Delete submissions
   - CSV export

### Pages
- `/admin/custom-registrations` - Admin dashboard (Form Builder + Submissions)
- `/registration-forms/[slug]` - Public registration form

## 🚀 Usage Guide

### Creating a Registration Form (Admin)

1. **Go to Admin Dashboard**
   ```
   /admin/custom-registrations
   ```

2. **Create New Template**
   - Click "Create New Template"
   - Enter form name (e.g., "Workshop Registration")
   - Enter slug (URL-friendly, e.g., "workshop-registration")
   - Add description (optional)

3. **Configure Fields**
   - Mandatory fields (name, email, phone, semester) are pre-added
   - Click "Add Field" to add custom fields
   - Configure field properties:
     - Key: Unique identifier (e.g., `college_name`)
     - Label: Display label (e.g., "College Name")
     - Type: Choose from 12 types
     - Required/Important flags
     - Validation rules (min/max, pattern, etc.)

4. **Email Field Configuration**
   When editing the email field:
   - **All Email Addresses**: Allows any valid email
   - **Only @iitp.ac.in**: Restricts to IIT Patna emails only

5. **Image Field Configuration**
   When adding an image field:
   - Set ImageKit folder (default: `/registrations`)
   - Set max file size in MB (default: 5 MB)

6. **Drag to Reorder**
   - Use grip icon to drag fields
   - Fields display in this order on public form

7. **Preview**
   - Click "Preview" to see form as users will see it
   - Click "Edit" to return to editing mode

8. **Save**
   - Click "Save Template"
   - Form is now live at `/registration-forms/{slug}`

### Public Form Submission Flow

1. **User Opens Form**
   ```
   /registration-forms/workshop-registration
   ```

2. **Fills Form Fields**
   - All fields display in configured order
   - Conditional fields show/hide based on selections
   - Image fields show file input with size limit

3. **Email Verification (if email field exists)**
   - User enters email
   - Clicks "Send OTP"
   - Receives 6-digit OTP via email
   - Enters OTP and clicks "Verify"
   - Email field becomes verified (green checkmark)

4. **Image Upload (if image fields exist)**
   - User selects image file
   - Image uploads to ImageKit automatically
   - Preview shows uploaded image

5. **Submit**
   - Click "Submit Registration"
   - Server validates all fields
   - Submission stored with metadata

6. **Success**
   - Success message displayed
   - Option to submit another response

### Viewing Submissions (Admin)

1. **Go to Submissions Tab**
   ```
   /admin/custom-registrations → Submissions tab
   ```

2. **Filter Submissions**
   - Filter by form slug
   - Filter by status (pending/approved/rejected)

3. **View Details**
   - Click eye icon to see full submission
   - Shows all form data and metadata

4. **Approve/Reject**
   - Click green checkmark to approve
   - Click red X to reject

5. **Export CSV**
   - Click "Export CSV" button
   - Downloads all visible submissions as CSV

## 📋 Field Types

| Type | Description | Options |
|------|-------------|---------|
| `text` | Single line text | min/max length, pattern |
| `email` | Email with verification | Domain restriction (all/@iitp.ac.in) |
| `tel` | Phone number | Pattern validation |
| `number` | Numeric input | min/max value |
| `date` | Date picker | - |
| `time` | Time picker | - |
| `url` | URL input | Pattern validation |
| `textarea` | Multi-line text | min/max length |
| `select` | Dropdown | Options (label/value pairs) |
| `radio` | Radio buttons | Options (label/value pairs) |
| `checkbox` | Multiple checkboxes | Options (label/value pairs) |
| `image` | Image upload | Folder, max size |

## 🔐 Security Features

- **Authentication**: Admin routes protected with NextAuth
- **OTP Verification**: Email ownership verification before submission
- **Email Domain Restriction**: Enforce @iitp.ac.in for IIT Patna registrations
- **IP & User Agent Logging**: Track submission metadata
- **File Size Limits**: Prevent large image uploads
- **Validation**: Both client-side and server-side
- **Rate Limiting**: OTP resend timer (5 mins 30 secs)

## 🛠️ Technical Stack

- **Framework**: Next.js 15 (App Router)
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth
- **Email**: Nodemailer (Gmail SMTP)
- **Cache**: Redis (Upstash) for OTP storage
- **Image Upload**: ImageKit
- **Drag-and-Drop**: @hello-pangea/dnd
- **UI Components**: shadcn/ui
- **Styling**: Tailwind CSS

## 🔧 Environment Variables Required

```env
# MongoDB
MONGODB_URI=mongodb://...

# NextAuth
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000

# Email (Gmail)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Redis (Upstash)
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...

# ImageKit
NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY=...
NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT=https://ik.imagekit.io/...
IMAGEKIT_PRIVATE_KEY=...
```

## 📝 Example Form Template JSON

```json
{
  "name": "Workshop Registration",
  "slug": "workshop-registration",
  "description": "Register for our upcoming workshop",
  "fields": [
    {
      "key": "name",
      "label": "Full Name",
      "type": "text",
      "required": true,
      "important": true,
      "order": 0,
      "validation": {
        "minLength": 2,
        "maxLength": 100
      }
    },
    {
      "key": "email",
      "label": "Email Address",
      "type": "email",
      "required": true,
      "important": true,
      "order": 1,
      "emailRestriction": "iitp"
    },
    {
      "key": "phone",
      "label": "Phone Number",
      "type": "tel",
      "required": true,
      "important": true,
      "order": 2,
      "validation": {
        "pattern": "^[0-9]{10}$",
        "customMessage": "Enter 10-digit phone number"
      }
    },
    {
      "key": "semester",
      "label": "Current Semester",
      "type": "select",
      "required": true,
      "important": true,
      "order": 3,
      "options": [
        {"label": "1st", "value": "1"},
        {"label": "2nd", "value": "2"},
        {"label": "3rd", "value": "3"}
      ]
    },
    {
      "key": "photo",
      "label": "Profile Photo",
      "type": "image",
      "required": false,
      "order": 4,
      "imageFolder": "/registrations/workshop",
      "maxFileSize": 5
    }
  ],
  "active": true
}
```

## 🎯 Key Differences from Original

| Feature | Old (Forms) | New (Registration) |
|---------|-------------|-------------------|
| **Name** | "Form" | "Registration" |
| **Routes** | `/api/forms/*` | `/api/registration/*` |
| **Public URL** | `/forms/[slug]` | `/registration-forms/[slug]` |
| **Submit Limit** | Had `submitLimit` field | ❌ Removed |
| **Image Upload** | ❌ Not supported | ✅ ImageKit integration |
| **Email Domain** | N/A | ✅ All / @iitp.ac.in choice |
| **OTP Verify** | ❌ Not required | ✅ Required before submit |
| **Admin Page** | `/admin/forms` | `/admin/custom-registrations` |

## 🐛 Troubleshooting

### OTP Not Received
- Check EMAIL_USER and EMAIL_PASS in .env
- Verify Gmail App Password is correct
- Check spam folder

### Image Upload Fails
- Verify ImageKit credentials in .env
- Check file size under limit
- Ensure file is valid image format

### Form Not Loading
- Check MongoDB connection
- Verify form is marked as "active"
- Check slug is correct

### Email Verification Fails
- Ensure @iitp.ac.in email if restricted
- Check Redis connection (UPSTASH_REDIS_REST_URL)
- Verify OTP hasn't expired (5:30 timeout)

## 🚀 Next Steps

1. **Test Complete Flow**:
   - Create a form template
   - Access public form
   - Test OTP verification
   - Upload an image
   - Submit registration
   - View in admin submissions

2. **Add More Features**:
   - Email notifications to admin on new submission
   - Form analytics (submission count, completion rate)
   - Duplicate submission detection
   - Bulk approve/reject
   - Custom email templates for OTP

3. **Security Enhancements**:
   - Rate limiting on OTP requests
   - CAPTCHA integration
   - File type validation for images
   - XSS protection

## 📄 License
MIT

---

**Created for**: STC IIT Patna Website
**Date**: October 31, 2025
