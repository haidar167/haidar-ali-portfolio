# My Portfolio — Dark Neon Developer Portfolio

A one-page personal portfolio for a web developer, built in the style of modern
"dark + neon" developer sites. Fast, responsive, animated — with a working
contact form that saves messages to a database.

## Features

- **Hero** — neon headline, profile photo with glowing ring, animated code terminal, live stats
- **Services** — 11 offering cards (websites, web apps, e-commerce, dashboards, APIs, performance, website repair, ads & promotion, video creation, AI text agent, AI voice agent)
- **Philosophy strip** — what you get vs. what most developers give you
- **Portfolio** — live project cards with tech tags
- **Testimonials** — client quotes with star ratings
- **Process** — 4-step "idea to launch" timeline
- **Tech stack** — categorized tools grid
- **Why work with me** — trust points
- **Contact form** — saves messages to SQLite via Prisma (`/api/contact`), toast notifications, and forwards a copy to the owner's email inbox via FormSubmit (activate it once from the email link sent after the first submission)
- **WhatsApp** — floating WhatsApp chat button (bottom-right) + contact card, powered by `whatsappNumber` in `src/lib/profile.ts`
- Fully responsive with a mobile hamburger menu, scroll-reveal animations (Framer Motion)

## Edit your content in ONE file

Everything personal lives in [`src/lib/profile.ts`](src/lib/profile.ts) — name,
role, email, social links, stats, services, projects, testimonials, tech stack,
process steps. Each field has an `← EDIT` comment.

**Profile photo:** replace `public/avatar.png` with your own photo (keep the
same filename), or change the `photo` field in `src/lib/profile.ts`.

## Tech Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Framer Motion animations
- Lucide icons
- Prisma ORM + SQLite (contact messages)
- shadcn/ui components

## Run locally

```bash
bun install
bun run db:push   # create the SQLite database
bun run dev       # start on http://localhost:3000
```

## Deploy to Vercel (free, ~2 minutes)

The site is designed to go live straight from this GitHub repository:

1. Go to [vercel.com](https://vercel.com) → **Sign Up / Log In with GitHub**
2. Click **Add New → Project**, then **Import** the `haidar-ali-portfolio` repository
3. Before clicking Deploy, open **Environment Variables** and add:
   - Name: `DATABASE_URL`
   - Value: `file:./db/custom.db`
4. Click **Deploy** — you get a live URL like `haidar-ali-portfolio.vercel.app`

Every future `git push` to `main` redeploys automatically.

> Note: the contact form always delivers messages to your email (via FormSubmit).
> The database backup is best-effort on serverless hosts — for guaranteed
> storage, switch `prisma/schema.prisma` to PostgreSQL/MySQL (e.g. Supabase).

---

Built with AI-powered speed, delivered with care.
