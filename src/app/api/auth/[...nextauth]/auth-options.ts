import { PrismaAdapter } from '@next-auth/prisma-adapter';
import type { NextAuthOptions } from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

import { env } from '@/env.mjs';
import prisma from '@/lib/prisma';
// import { stripeServer } from '@/lib/stripe';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLINET_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (!session.user) return session;

      // session.user.id = user.id;
      // session.user.stripeCustomerId = user.stripeCustomerId;
      // session.user.isActive = user.isActive;

      return {
        ...session,
        user: {
          ...session.user,
          id: user.id,
          // stripeCustomerId: user.stripeCustomerId,
          // isActive: user.isActive,
        },
      };
    },
  },
  events: {
    createUser: async ({ user }) => {
      if (!user.email || !user.name) return;

      // await stripeServer.customers
      //   .create({
      //     email: user.email,
      //     name: user.name,
      //   })
      //   .then(async (customer) => {
      //     return prisma.user.update({
      //       where: { id: user.id },
      //       data: {
      //         stripeCustomerId: customer.id,
      //       },
      //     });
      //   });
    },
  },
};
