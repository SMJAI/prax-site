# Prax - AI Systems That Actually Work

A Next.js site with Clerk authentication for user accounts.

## 🚀 Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Clerk

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Create a new application (or use existing)
3. Go to **Configure → API Keys**
4. Copy your keys

### 3. Create Environment File

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
CLERK_SECRET_KEY=sk_test_YOUR_KEY_HERE

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
prax-nextjs/
├── app/
│   ├── layout.tsx          # Root layout with Clerk + Navigation
│   ├── page.tsx            # Homepage with systems library
│   ├── globals.css         # Global styles
│   ├── vault/page.tsx      # Protected Pro Vault (requires login)
│   ├── agencies/page.tsx   # For Agencies landing page
│   ├── partners/page.tsx   # Partner program page
│   ├── bounties/page.tsx   # Bounty board
│   ├── submit/page.tsx     # Submit a system
│   ├── about/page.tsx      # About page
│   ├── privacy/page.tsx    # Privacy policy
│   ├── terms/page.tsx      # Terms of service
│   ├── sign-in/[[...sign-in]]/page.tsx
│   └── sign-up/[[...sign-up]]/page.tsx
├── middleware.ts           # Clerk middleware (protects /vault)
├── .env.example            # Example environment variables
├── .env.local              # Your actual keys (DO NOT COMMIT)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🔒 Protected Routes

The `/vault` page is protected by Clerk. Users must sign in to access it.

To add more protected routes, edit `middleware.ts`:

```typescript
const isProtectedRoute = createRouteMatcher([
  '/vault(.*)',
  '/dashboard(.*)',  // Add more routes here
])
```

## 🚀 Deploy to Vercel

### Option 1: Connect GitHub

1. Push this code to a GitHub repository
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy!

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

## ⚙️ Environment Variables for Vercel

Add these in Vercel Dashboard → Settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | pk_live_xxx or pk_test_xxx |
| `CLERK_SECRET_KEY` | sk_live_xxx or sk_test_xxx |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | /sign-in |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | /sign-up |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | / |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | / |

## 📝 Customization

### Change Authentication Provider UI

Clerk provides customizable components. See [Clerk Docs](https://clerk.com/docs/components/overview).

### Add More Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Export a default component

### Style Changes

Edit `app/globals.css` - all CSS variables are at the top.

## 🆘 Support

- Email: hello@prax.digital
- Twitter: @PraxDigital
