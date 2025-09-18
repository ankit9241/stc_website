import * as React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
}

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  company = 'Not provided',
  subject = 'No subject',
  message,
}) => {
  const containerStyle = {
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
  };

  const headerStyle = {
    color: '#1e40af',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '12px',
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold' as const
  };

  const fieldContainerStyle = {
    marginBottom: '15px',
    padding: '0 10px'
  };

  const labelStyle = {
    display: 'inline-block',
    width: '100px',
    fontWeight: 'bold' as const,
    color: '#4b5563'
  };

  const messageContainerStyle = {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: '#f8fafc',
    borderLeft: '4px solid #3b82f6',
    borderRadius: '4px'
  };

  const footerStyle = {
    marginTop: '30px',
    paddingTop: '15px',
    borderTop: '1px solid #e5e7eb',
    fontSize: '13px',
    color: '#6b7280',
    textAlign: 'center' as const
  };

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>New Contact Form Submission</h1>
      
      <div style={fieldContainerStyle}>
        <div style={{ marginBottom: '12px' }}>
          <span style={labelStyle}>Name:</span>
          <span>{name}</span>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={labelStyle}>Email:</span>
          <a href={`mailto:${email}`} style={{ color: '#3b82f6', textDecoration: 'none' }}>
            {email}
          </a>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={labelStyle}>Company:</span>
          <span>{company}</span>
        </div>
        
        <div style={{ marginBottom: '12px' }}>
          <span style={labelStyle}>Subject:</span>
          <span>{subject}</span>
        </div>
      </div>
      
      <div style={messageContainerStyle}>
        <div style={{ 
          fontSize: '16px', 
          fontWeight: '600', 
          color: '#1e40af',
          marginBottom: '12px'
        }}>
          Message:
        </div>
        <div style={{
          whiteSpace: 'pre-line',
          backgroundColor: 'white',
          padding: '16px',
          borderRadius: '4px',
          borderLeft: '4px solid #3b82f6',
          fontSize: '15px',
          lineHeight: '1.6',
        }}>
          {message}
        </div>
      </div>
      
      <div style={footerStyle}>
        <p style={{ margin: '4px 0' }}>This message was sent from your website contact form.</p>
        <p style={{ margin: '4px 0', color: '#94a3b8' }}>
          {new Date().toLocaleString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </div>
    </div>
  );
};

export default ContactFormEmail;
