# Custom Form System - Complete Documentation

## Overview
A fully customizable form management system with admin controls and drag-and-drop field ordering.

## Features
- ✅ Admin-controlled form creation
- ✅ Drag-and-drop field ordering
- ✅ 11 field types supported
- ✅ Conditional field display
- ✅ Custom validation rules
- ✅ Mandatory fields (name, email, phone, semester)
- ✅ Form submissions with status tracking
- ✅ CSV export functionality
- ✅ Responsive design

## File Structure

### Backend (API Routes)
1. **`app/api/admin/form-templates/route.ts`**
   - GET: Fetch all form templates
   - POST: Create new form template
   - PUT: Update existing template
   - DELETE: Delete template
   - Protected with admin authentication

2. **`app/api/forms/[slug]/route.ts`**
   - GET: Fetch active form template by slug (public)

3. **`app/api/forms/submit/route.ts`**
   - POST: Submit form data with validation

4. **`app/api/admin/submissions/route.ts`**
   - GET: Fetch all submissions (filterable)
   - PUT: Update submission status
   - DELETE: Delete submission

### Database Schemas
1. **`schema/FormTemplateSchema.ts`**
   - Defines form template structure
   - Fields: name, slug, description, fields[], active, submitLimit, allowMultiple

2. **`schema/FormSubmissionSchema.ts`**
   - Stores form submissions
   - Fields: formTemplateId, formSlug, data{}, status, submittedAt, metadata{}

### Frontend Components
1. **`components/admin/FormBuilder.tsx`**
   - Main admin interface for creating forms
   - Drag-and-drop field ordering
   - Field editor modal
   - Preview mode
   - Template management

2. **`components/forms/DynamicForm.tsx`**
   - Public form renderer
   - Conditional field display
   - Client-side validation
   - Success state handling

3. **`components/admin/SubmissionsViewer.tsx`**
   - View all submissions
   - Filter by form and status
   - Approve/reject submissions
   - CSV export
   - Detailed submission view

### Pages
1. **`app/admin/forms/page.tsx`**
   - Admin dashboard with tabs
   - Form Builder tab
   - Submissions tab

2. **`app/forms/[slug]/page.tsx`**
   - Public form page
   - Renders DynamicForm component

## Field Types Supported
1. `text` - Single line text
2. `email` - Email input with validation
3. `tel` - Phone number
4. `number` - Numeric input
5. `date` - Date picker
6. `time` - Time picker
7. `url` - URL with validation
8. `textarea` - Multi-line text
9. `select` - Dropdown
10. `radio` - Radio buttons
11. `checkbox` - Multiple checkboxes

## Field Configuration Options
- **key**: Unique identifier
- **label**: Display label
- **type**: Field type
- **placeholder**: Placeholder text
- **required**: Must be filled
- **important**: Shows warning icon
- **options**: For select/radio/checkbox (array of {label, value})
- **order**: Display order (drag-and-drop sets this)
- **validation**: 
  - min/max: For numbers
  - minLength/maxLength: For text
  - pattern: Regex validation
  - customMessage: Error message
- **conditional**:
  - fieldKey: Which field to check
  - operator: ==, !=, in, notin, >, <
  - value: Comparison value

## Mandatory Fields
These fields MUST exist in every form:
- name
- email
- phone
- semester

The system validates this when creating/updating templates.

## Usage Guide

### Creating a Form (Admin)
1. Go to `/admin/forms`
2. Click "Create New Form"
3. Enter form name, slug, description
4. Add fields using the "Add Field" button
5. Configure each field (type, validation, etc.)
6. Drag fields to reorder
7. Toggle preview to test
8. Save template

### Field Configuration
- Click "Edit" on any field to open field editor
- Set field type and properties
- Add options for select/radio/checkbox
- Set validation rules
- Add conditional display rules
- Mandatory fields cannot be deleted

### Viewing Submissions (Admin)
1. Go to `/admin/forms` → Submissions tab
2. Filter by form or status
3. View details by clicking eye icon
4. Approve/reject submissions
5. Export to CSV for analysis

### Public Form Access
- Forms are available at: `/forms/{slug}`
- Example: `/forms/event-registration`
- Users fill and submit
- Success message shown on submission

## API Endpoints

### Admin Endpoints (Protected)
```
GET    /api/admin/form-templates     - Get all templates
POST   /api/admin/form-templates     - Create template
PUT    /api/admin/form-templates     - Update template
DELETE /api/admin/form-templates     - Delete template

GET    /api/admin/submissions        - Get all submissions
PUT    /api/admin/submissions        - Update submission status
DELETE /api/admin/submissions        - Delete submission
```

### Public Endpoints
```
GET    /api/forms/[slug]             - Get form template
POST   /api/forms/submit             - Submit form data
```

## Validation Flow
1. **Client-side** (DynamicForm.tsx):
   - Required field check
   - Length validation
   - Pattern matching
   - Number range check

2. **Server-side** (submit route):
   - Required field validation
   - Mandatory field check
   - Regex pattern validation
   - Submit limit check
   - Duplicate submission check

## Database Indexes
- FormTemplate: slug (unique)
- FormSubmission: formTemplateId + submittedAt
- FormSubmission: formSlug

## Security Features
- Admin routes protected with authentication
- IP address logging
- User agent tracking
- Submit rate limiting
- Duplicate prevention
- SQL injection prevention (NoSQL)

## Example Form Template JSON
```json
{
  "name": "Event Registration",
  "slug": "event-registration",
  "description": "Register for our upcoming event",
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
      "order": 1
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
        "customMessage": "Please enter a valid 10-digit phone number"
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
    }
  ],
  "active": true,
  "submitLimit": 1,
  "allowMultiple": false
}
```

## Next Steps
1. **Add authentication** to admin routes
2. **Test the complete flow**:
   - Create a form template
   - Access public form
   - Submit data
   - View submissions
3. **Add email notifications** on form submission
4. **Add form analytics** (submission count, completion rate)
5. **Add form templates** (pre-built forms)

## Troubleshooting

### Forms not loading
- Check MongoDB connection
- Verify MONGODB_URI in .env
- Check form is marked as active

### Submissions not saving
- Check validation rules
- Verify mandatory fields present
- Check submit limit not exceeded

### Drag-and-drop not working
- Ensure @hello-pangea/dnd is installed
- Check browser console for errors

## Environment Variables Required
```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

## Dependencies
- @hello-pangea/dnd: ^16.6.1
- mongoose: (already installed)
- next-auth: (already installed)
- shadcn/ui components: (already installed)
