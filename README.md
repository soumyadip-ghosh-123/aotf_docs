# AOTF Official Documentation Portal

Welcome to the **AOTF Docs** repository. This is a standalone, authenticated documentation portal for **AOTF (Academy of Tutors & Freelancers)**, providing developer references, system architecture overviews, and knowledge transfer guides.

## Overview

Unlike the main AOTF platform repository, this project is dedicated purely to serving documentation. It utilizes **Fumadocs** for powerful MDX-based documentation rendering and is secured behind **Clerk** authentication to ensure that internal architecture and sensitive guides remain private.

## Tech Stack

This project is built using modern tooling optimized for fast, static documentation delivery:

- **Framework**: [Next.js 16.2](https://nextjs.org/) (App Router)
- **Documentation Engine**: [Fumadocs v16](https://fumadocs.dev/) (`fumadocs-core`, `fumadocs-mdx`, `fumadocs-ui`)
- **Authentication**: [Clerk](https://clerk.com/) (`@clerk/nextjs`)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Diagrams**: [Mermaid](https://mermaid.js.org/) (via `fumadocs-mermaid`)
- **UI Icons**: [Lucide React](https://lucide.dev/)

## Authentication & Middleware

The documentation is intended for internal use. We use `clerkMiddleware` to protect the documentation routes. 
- `/sign-in` and `/sign-up` are whitelisted as public routes.
- All other routes require an active Clerk session.

## Getting Started

### Prerequisites

Ensure you have Node.js installed. We recommend using `pnpm` as the package manager.

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory. You must provide Clerk API keys to run the local server, as the middleware will block access without them.

```env
# Clerk configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...

# Clerk Route Handlers
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/
```

### 3. Run the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You will be prompted to authenticate before you can view the documentation content.

## Content Structure

All markdown content is stored in the `content/` directory. 
To modify or add new documentation pages, create new `.mdx` files within the `content/` structure. Fumadocs will automatically parse the MDX, render Mermaid diagrams, and generate the sidebar navigation based on your `meta.json` configurations.
