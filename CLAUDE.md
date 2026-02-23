# {{PROJECT_NAME}}

{{PROJECT_DESCRIPTION}}

## Tech Stack
- Next.js (App Router)
- TypeScript (strict mode)
- Supabase (Auth, DB, RLS)
- Stripe (Payments)
- Tailwind CSS

## Conventions
- 2 spaces, single quotes, no semicolons
- Functional components only
- Feature-based directory structure
- Conventional Commits (English)

## Key Paths
- `src/app/` — App Router pages and API routes
- `src/lib/` — Shared utilities (Supabase, Stripe)
- `supabase/migrations/` — Database migrations

## Environment Variables
See `.env.example` for required variables.

## Commands
```bash
npm run dev       # Development server
npm run build     # Production build
npm run lint      # ESLint check
npx tsc --noEmit  # TypeScript check
```
