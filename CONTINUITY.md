# Project Continuity - Secure Web App

## Quick Context
- **Project**: Next.js 16 secure web app with authentication
- **Location**: `/home/butzy/secure-web-app`
- **Last Session**: 2026-03-30
- **Current Issue**: Database connectivity failure on Vercel deployment

## What Works Locally
- ✅ Next.js app runs with SQLite (`npm run dev`)
- ✅ Authentication (login/register/dashboard)
- ✅ GitHub integration (repo: `butzyisorena/Notes`)
- ✅ Code structure and Prisma setup

## What's Broken on Vercel
- ❌ **Database unreachable**: Supabase PostgreSQL in Tokyo region (IPv6 only)
- ❌ **Error**: `db_unreachable` during build
- ❌ **Root cause**: Vercel build environment can't connect to IPv6-only database

## Immediate Task
**Fix database connectivity for Vercel deployment:**

1. **Create new Supabase project** in US East or EU West region (IPv4 supported)
2. **Update environment variables** in Vercel with new connection string
3. **Run migrations** to create tables in new database
4. **Redeploy** and test

## Key Files Modified Recently
- `src/lib/prisma.ts` - Conditional PostgreSQL/SQLite adapter
- `package.json` - Build script with migrations
- `prisma/schema.prisma` - PostgreSQL schema for production

## Environment Variables Needed
```
DATABASE_URL=postgresql://postgres:[password]@db.host.supabase.co:5432/postgres
DATABASE_PROVIDER=postgresql
NEXTAUTH_URL=https://your-deployment.vercel.app
NEXTAUTH_SECRET=secure-random-string
```

## Commands to Remember
- Test locally: `npm run dev`
- Check deployment: Vercel dashboard
- Push changes: `git push` (auto-deploys to Vercel)

## Next Steps (Priority Order)
1. Create new Supabase project in US East/EU West
2. Update Vercel environment variables
3. Run `npx prisma migrate deploy` on new database
4. Trigger new deployment on Vercel
5. Test registration/login on live site
6. Update NEXTAUTH_URL to actual deployment URL

## How to Continue Tomorrow
1. Open this project: `cd /home/butzy/secure-web-app`
2. Run: `npm run dev` to test locally
3. Check Vercel deployment status
4. Create new Supabase project with IPv4 support
5. Update environment variables and redeploy