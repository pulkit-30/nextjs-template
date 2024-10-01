import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    POSTGRES_URL: z.string().min(1),
    APP_URL: z.string().url().min(1),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    GOOGLE_SITE_VERIFICATION_ID: z.string().min(1),
    // NEXTAUTH_URL: z.string().url().optional(),
    // NEXTAUTH_SECRET: z.string().min(1),
    // STRIPE_SECRET_KEY: z.string().min(1),
    // STRIPE_WEBHOOK_SECRET_KEY: z.string().min(1),
    // STRIPE_SUBSCRIPTION_PRICE_ID: z.string().min(1),
    NEXTAUTH_URL: z.string().url().optional(),
    NEXTAUTH_SECRET: z.string().min(1),
    STRIPE_SECRET_KEY: z.string().min(1),
    STRIPE_WEBHOOK_SECRET_KEY: z.string().min(1),
    STRIPE_SUBSCRIPTION_PRICE_ID: z.string().min(1),
    GOOGLE_CLINET_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: {
    POSTGRES_URL: process.env.POSTGRES_URL,
    APP_URL: process.env.APP_URL,
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_CLINET_ID: process.env.GOOGLE_CLINET_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    // NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    // NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    // STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    // STRIPE_WEBHOOK_SECRET_KEY: process.env.STRIPE_WEBHOOK_SECRET_KEY,
    // STRIPE_SUBSCRIPTION_PRICE_ID: process.env.STRIPE_SUBSCRIPTION_PRICE_ID,
    // NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:
    // process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    GOOGLE_SITE_VERIFICATION_ID: 'DEMO',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    STRIPE_SECRET_KEY: 'DEMO',
    STRIPE_WEBHOOK_SECRET_KEY: 'DEMO',
    STRIPE_SUBSCRIPTION_PRICE_ID: 'DEMO',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'DEMO',
  },
});
