# Admin Authentication & RBAC

The goal is to implement a secure login system for the Admin Panel, adhering to the RBAC (Role-Based Access Control) and Enterprise B2B SaaS requirements.

## Background Context
Currently, the `/admin` routes are open. We need to secure them so that only authorized administrators can access the CVs and manage the platform. The system needs to support roles to comply with your RBAC rules.

## Open Questions

1. **Authentication Library**: I propose using **NextAuth.js (v5 / Auth.js)**. It integrates perfectly with Next.js App Router and Prisma. Do you agree with this choice?
2. **Login Method**: Since this is an admin panel for an ERP/SaaS, should we use a standard **Email/Password (Credentials)** login, or do you prefer **Magic Links (Email)** or **OAuth** (Google/Microsoft)?
3. **Roles**: I plan to add a `User` model to Prisma with a `role` field (e.g., `SUPERADMIN`, `ADMIN`). Does this fit your organizational structure?

## Proposed Changes

### Database & Schema
- **`prisma/schema.prisma`** (MODIFY)
  - Add a new `User` model with fields: `id`, `name`, `email`, `password` (hashed), `role`, `createdAt`, `updatedAt`.
  - Run `npx prisma db push` to sync the database.

### API / Server Actions
- **`auth.ts` / NextAuth Config** (NEW)
  - Setup NextAuth configuration, Prisma adapter, and the chosen login provider.
  - Setup session callbacks to include the user's `role` in the JWT/session.

### Middleware
- **`src/middleware.ts`** (NEW)
  - Implement Next.js Middleware to protect all routes under `/admin/*`. It will check for a valid session and redirect unauthenticated users to the login page.

### Pages & UI
- **`src/app/admin/login/page.tsx`** (NEW)
  - A premium, glassmorphism login form adhering to the "Tactical Workstation" geometry (34px inputs).
  - Server actions to handle the credentials verification and sign-in process.

- **`src/app/admin/layout.tsx`** (MODIFY)
  - Add a "Sign Out" button to the sidebar.
  - Fetch the active session to display the logged-in admin's name.

## Verification Plan
### Automated
- Run `npm run lint` and `npm run build`.

### Manual Verification
1. Attempt to access `/admin/applications` without logging in (should redirect to `/admin/login`).
2. Create a seed script or manually insert an admin user into the database.
3. Log in with the admin credentials.
4. Verify successful redirection and access to the dashboard.
5. Click "Sign Out" and verify session termination.
