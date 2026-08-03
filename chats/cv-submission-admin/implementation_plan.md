# Submit CV Form and Admin Panel

The goal is to implement a functional "Submit CV" form for candidates and an admin panel to view and manage these submissions.

## Background Context
Currently, the `Application` Prisma model exists in the database schema, but there is no dedicated UI for submitting an application (the Job detail page just links to `/contact`), nor is there an admin panel to view submitted applications.

## Open Questions

1. **Submit CV Form Location**: Should the form be a standalone page (e.g., `/submit-cv`) for general applications, or should it be integrated into the job details page (e.g., replacing the `/contact` link with a real modal/form for a specific job)? Or both?
2. **File Uploads**: The database schema uses `resumeUrl` and `passportCopy`. Do you want to implement actual file uploading (e.g., to Vercel Blob, AWS S3, or a local public folder), or should the form just accept URLs for now?
3. **Admin Panel Structure**: Since there is no `/admin` folder yet, should we create a secure route at `/admin/applications`? Do we need authentication (like NextAuth/Auth.js) for the admin panel, or just a basic layout for now (to be secured later)?
4. **Admin UI Layout**: Should the admin panel follow a specific sidebar layout design (e.g., "Tactical Workstation" geometry with 34px height inputs) as per your rules?

## Proposed Changes

### Database & Schema
- No immediate Prisma schema changes are required if we use the existing `Application` model, but we need to ensure the `jobId` requirement is handled. (If a general CV submission is allowed, we might need a generic "General Application" job or make `jobId` optional).

### Submit CV Form Component
- `src/components/forms/SubmitCVForm.tsx` (NEW)
- A client component using `react-hook-form` and `zod` for validation.
- Fields: Full Name, Email, Phone, Experience, Resume (Upload/URL).

### API / Server Actions
- `src/app/actions/applications.ts` (NEW)
- Server action to validate and insert the application into the database via Prisma.

### Pages
- `src/app/submit-cv/page.tsx` (NEW)
- The public-facing page containing the Submit CV form.

- `src/app/admin/layout.tsx` (NEW)
- The admin dashboard shell (sidebar, header, etc.) following a premium, functional design.

- `src/app/admin/applications/page.tsx` (NEW)
- A data table to view, filter, and manage CV submissions. Will include columns for Name, Job, Date, Status, and links to view the Resume.

## Verification Plan
### Automated
- Run `npm run lint` and `npm run build` to ensure type safety.

### Manual Verification
- Navigate to the Submit CV page and submit a test application.
- Navigate to `/admin/applications` and verify the application appears correctly.
- Ensure the admin layout looks premium and follows the design system rules.
