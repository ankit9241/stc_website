import * as React from "react";
import { toIndianDateTimeString } from "@/lib/formatDate";

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
  company = "Not provided",
  subject = "No subject",
  message,
}) => {
  const baseStyles = {
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    lineHeight: "1.6",
    color: "#1f2937",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  };

  const containerStyle = {
    ...baseStyles,
    maxWidth: "600px",
    margin: "0 auto",
    padding: "0",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  } as const;

  const headerStyle = {
    ...baseStyles,
    padding: "24px 32px",
    margin: "0",
    fontSize: "24px",
    fontWeight: "700",
    color: "#ffffff",
    backgroundColor: "#2563eb",
    background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
  } as const;

  const contentStyle = {
    padding: "32px",
  } as const;
  const fieldContainerStyle = {
    marginBottom: "20px",
    padding: "0",
  } as const;

  const fieldRowStyle = {
    display: "flex",
    flexDirection: "row",
    marginBottom: "16px",
    flexWrap: "wrap" as const,
  } as const;

  const labelStyle = {
    ...baseStyles,
    display: "block",
    width: "120px",
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: "4px",
    fontSize: "14px",
  } as const;

  const valueStyle = {
    ...baseStyles,
    flex: "1",
    minWidth: "200px",
    margin: "0",
    padding: "0",
    color: "#111827",
    fontWeight: "500",
  } as const;

  const messageContainerStyle = {
    ...baseStyles,
    margin: "32px 0 0",
    padding: "20px",
    backgroundColor: "#f8fafc",
    borderLeft: "4px solid #2563eb",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
  } as const;

  const messageLabelStyle = {
    ...baseStyles,
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#4b5563",
    marginBottom: "12px",
    textTransform: "uppercase" as const,
    letterSpacing: "0.05em",
  } as const;

  const messageTextStyle = {
    ...baseStyles,
    whiteSpace: "pre-wrap",
    margin: "0",
    lineHeight: "1.7",
    color: "#1f2937",
  } as const;

  const footerStyle = {
    ...baseStyles,
    marginTop: "40px",
    paddingTop: "20px",
    borderTop: "1px solid #e5e7eb",
    fontSize: "13px",
    color: "#6b7280",
    textAlign: "center" as const,
    lineHeight: "1.5",
  } as const;

  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>New Contact Form Submission</h1>

      <div style={contentStyle}>
        <div style={fieldContainerStyle}>
          <div style={fieldRowStyle}>
            <div>
              <span style={labelStyle}>Name</span>
              <p style={valueStyle}>{name}</p>
            </div>
          </div>

          <div style={fieldRowStyle}>
            <div>
              <span style={labelStyle}>Email</span>
              <p style={valueStyle}>
                <a
                  href={`mailto:${email}`}
                  style={{
                    color: "#2563eb",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          <div style={fieldRowStyle}>
            <div>
              <span style={labelStyle}>Company</span>
              <p style={valueStyle}>{company}</p>
            </div>
          </div>

          <div style={fieldRowStyle}>
            <div>
              <span style={labelStyle}>Subject</span>
              <p style={valueStyle}>{subject}</p>
            </div>
          </div>
        </div>

        <div style={messageContainerStyle}>
          <span style={messageLabelStyle}>Message</span>
          <div style={messageTextStyle}>{message}</div>
        </div>

        <div style={footerStyle}>
          <p>
            This email was sent from the contact form on STC IIT Patna website.
          </p>
          <p style={{ margin: "8px 0 0", opacity: 0.8 }}>
            &copy; {new Date().getFullYear()} Student Technical Council, IIT
            Patna. All rights reserved.
          </p>
          <p style={{ margin: "12px 0 0", fontSize: "12px", color: "#9ca3af" }}>
            {toIndianDateTimeString(new Date())}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactFormEmail;
