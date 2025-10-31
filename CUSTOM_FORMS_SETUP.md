# Custom Registration Forms - Setup Complete! ✅

## Changes Made:

### 1. Admin Interface
**Location**: `/admin/registration`

Added a 3rd tab "Custom Forms" with two sub-tabs:
- **Form Builder**: Create/edit custom registration forms with drag-and-drop
- **Submissions**: View/manage form submissions

### 2. Public Form Access
**Location**: `/registration/[id]`

- If `id` is a MongoDB ObjectID → Event registration form (existing)
- If `id` is a slug → Custom registration form (new)

Example URLs:
- `/registration/67234abc123...` → Event form
- `/registration/workshop-2025` → Custom form

### 3. Features Included

#### Form Builder:
✅ 12 field types including **Image Upload**
✅ Drag-and-drop field ordering
✅ Email domain restriction (All / @iitp.ac.in only)
✅ Image field configuration:
   - ImageKit folder path
   - Max file size (MB)
✅ Field validation (regex, min/max, length)
✅ Conditional fields
✅ Mandatory fields (name, email, phone, semester)

#### Public Form:
✅ OTP email verification
✅ Image upload to ImageKit
✅ Real-time validation
✅ Conditional field display
✅ Success message with redirect

#### Submissions:
✅ View all submissions
✅ Filter by form/status
✅ Approve/reject
✅ Delete submissions
✅ CSV export

## How to Use:

### Create a Custom Form:
1. Go to `/admin/registration`
2. Click "Custom Forms" tab
3. Click "Create New Template"
4. Add fields (including image fields if needed)
5. Configure email restriction
6. Drag to reorder fields
7. Save template

### Add Image Field:
1. In Form Builder, click "Add Field"
2. Select type: "Image Upload"
3. Configure:
   - **ImageKit Folder**: e.g., `/registrations/workshop-2025`
   - **Max File Size**: e.g., 5 MB
4. Mark as required if needed
5. Save field

### Public Form URL:
- Form with slug `workshop-2025` will be available at:
  ```
  /registration/workshop-2025
  ```

### User Fills Form:
1. Opens `/registration/workshop-2025`
2. Fills all fields
3. Uploads image (if image field exists)
4. Clicks "Send OTP" for email verification
5. Enters OTP and verifies
6. Submits form
7. Success!

### View Submissions:
1. Go to `/admin/registration`
2. Click "Custom Forms" tab
3. Click "Submissions" sub-tab
4. Filter, view, approve/reject, or export

## Schema Support:

### RegistrationTemplateSchema:
- ✅ Image field type included
- ✅ Email restriction (all/iitp)
- ✅ Image folder & size config

### Field Types:
1. text
2. email (with domain restriction)
3. tel
4. number
5. date
6. time
7. url
8. textarea
9. select
10. radio
11. checkbox
12. **image** ← New!

## API Routes:

All custom form APIs already created:
- `/api/admin/registration-templates` - CRUD
- `/api/registration/[slug]` - Fetch form
- `/api/registration/send-otp` - Email OTP
- `/api/registration/verify-otp` - Verify OTP
- `/api/registration/submit` - Submit form
- `/api/admin/registration-submissions` - Manage submissions

## Testing:

1. **Create Form**:
   ```
   http://localhost:3000/admin/registration
   → Custom Forms tab
   → Create form with image field
   ```

2. **Test Public Form**:
   ```
   http://localhost:3000/registration/your-slug
   ```

3. **View Submissions**:
   ```
   http://localhost:3000/admin/registration
   → Custom Forms → Submissions
   ```

## Notes:

- ✅ Image uploads work via ImageKit
- ✅ OTP email verification required before submit
- ✅ Email domain can be restricted to @iitp.ac.in
- ✅ All validation happens client + server side
- ✅ Existing event registration (/registration/[ObjectID]) still works
- ✅ Custom forms use slug-based URLs (/registration/[slug])

---

**Everything is ready to use!** 🚀
