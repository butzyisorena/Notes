# Project Continuity Prompt

## Project Overview
**Project Name**: Secure Web App  
**Location**: `/home/butzy/secure-web-app`  
**Tech Stack**: Next.js 16 + TypeScript + Tailwind CSS + Prisma + NextAuth.js  
**Last Updated**: 2026-03-29

## Current State
✅ **Completed Tasks:**
1. Next.js project structure with TypeScript and Tailwind CSS
2. Authentication system with NextAuth.js (email/password)
3. Prisma database with SQLite for development
4. Secure password hashing with bcrypt (12 rounds)
5. Login page with error handling
6. Registration page with password validation (12+ chars, uppercase, lowercase, numbers, special chars)
7. Dashboard page with user session management
8. Vercel deployment configuration
9. Git repository initialized

## Key Files
- **Authentication**: `src/lib/auth.ts` - NextAuth configuration with credentials provider
- **Database**: `src/lib/prisma.ts` - Prisma client with SQLite adapter
- **Password Utils**: `src/lib/password.ts` - Password validation and hashing
- **Login Page**: `src/app/login/page.tsx`
- **Registration Page**: `src/app/register/page.tsx`
- **Dashboard**: `src/app/dashboard/page.tsx`
- **API Routes**: 
  - `src/app/api/auth/[...nextauth]/route.ts` - NextAuth API
  - `src/app/api/auth/register/route.ts` - Registration endpoint

## Database
- **Type**: SQLite (file:./dev.db)
- **Models**: User, Account, Session, VerificationToken
- **Migrations**: `prisma/migrations/`

## Environment Variables
```
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="development-secret-change-in-production-1234567890"
```

## Commands
- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Start**: `npm run start`
- **Prisma Studio**: `npx prisma studio`
- **Database Push**: `npx prisma db push`

## Next Steps (Pending)
- [ ] Connect GitHub repository for source control
- [ ] Set up PostgreSQL for production (Vercel Postgres)
- [ ] Add email verification for new accounts
- [ ] Implement password reset functionality
- [ ] Add user profile management
- [ ] Create additional features as requested

## GitHub Integration
**Status**: Git repository initialized, ready to connect to GitHub  
**To connect**: 
1. Create repository on GitHub
2. Run: `git remote add origin <github-repo-url>`
3. Run: `git push -u origin master`

## Vercel Deployment
**Status**: Configuration ready  
**To deploy**:
1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## Important Notes
1. **Security**: NEXTAUTH_SECRET should be changed in production
2. **Database**: Switch to PostgreSQL for production (Vercel Postgres recommended)
3. **Password**: Current validation requires 12+ characters with complexity
4. **Session**: JWT-based sessions with 30-day expiration (default)

## To Resume Work
Use this prompt to continue development:
```
I'm continuing work on the secure web app at /home/butzy/secure-web-app.
The app has Next.js 16 with authentication (NextAuth.js + credentials), 
Prisma with SQLite, and a dashboard. Current priorities are:
1. [Your next priority]
2. [Additional tasks]
Please help me continue with these tasks.
```