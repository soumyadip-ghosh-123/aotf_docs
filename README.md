# AOTF Docs

Welcome to the official documentation and knowledge transfer guide for **AOTF — Academy of Tutors & Freelancers**.

This site serves as both a developer reference and a full knowledge transfer guide for the platform, built using [Fumadocs](https://fumadocs.dev).

## What is AOTF?

AOTF is a semi-automated, admin-moderated platform that acts as an intermediary connecting:

- **Providers** (Teachers and Freelance Candidates) — who want work
- **Consumers** (Students, Parents, Clients) — who need tutors or freelancers
- **Admins** — who moderate, verify, and facilitate matches

The platform digitises the entire gig-matching pipeline: from requirement intake → posting → application → review → assignment → feedback.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Tech Stack

The platform is built with:
- **Framework**: Next.js 16.1 (App Router)
- **Database**: MongoDB Atlas M0 via Mongoose
- **Auth**: Clerk
- **Payments**: Razorpay
- **Media**: Cloudinary
- **Email**: Resend
- **Monitoring**: Sentry
- **Docs**: Fumadocs v16
- **Hosting**: Vercel

## Learn More

To learn more about the technologies used in this documentation, take a look at the following resources:

- [Fumadocs Documentation](https://fumadocs.dev/docs) - learn about Fumadocs features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js.
