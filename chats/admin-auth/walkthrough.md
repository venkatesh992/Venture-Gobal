# Admin Authentication Implementation

I have completed the implementation of the Admin Authentication system using NextAuth.js and Role-Based Access Control (RBAC).

## Changes Made
- **Database Schema**: Added a `User` model with a `role` field to your Prisma database schema.
- **Authentication Core**: Setup NextAuth v5 in `src/auth.ts` and `src/app/api/auth/[...nextauth]/route.ts` using the Credentials provider and bcrypt for secure password hashing.
- **Middleware Protection**: Added a Next.js `middleware.ts` file that automatically protects the `/admin` dashboard and all nested routes. Unauthenticated users are seamlessly redirected to the login page.
- **Login UI**: Designed a beautiful, premium login page at `/admin/login` using the Tactical Workstation Geometry design standard, complete with glassmorphism and Framer Motion micro-animations.
- **Session Integration**: Updated the Admin Layout (`src/app/admin/layout.tsx`) to display the logged-in user's name and email in the sidebar, along with a functional "Sign Out" button.
- **Seeding Script**: Created and ran a script to generate your first `SUPERADMIN` user.

## Your Credentials

You can now test the admin panel using these seeded credentials:

> [!IMPORTANT]
> **Email:** `admin@vgrecruitment.com`
> **Password:** `admin123`

Please change this password when moving to production!

## How to Test
1. Make sure your server is running (`npm run dev`).
2. Navigate to `http://localhost:3000/admin/applications` — you should immediately be redirected to `/admin/login`.
3. Sign in using the credentials provided above.
4. You should be granted access back to the applications dashboard.
5. Notice your profile information in the bottom left of the sidebar, and try the **Sign Out** button to verify the session ends correctly.
