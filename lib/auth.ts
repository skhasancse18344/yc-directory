/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextAuthOptions } from "next-auth";
import GitHub from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      // authorization: { params: { scope: "read:user user:email" } },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  session: { strategy: "jwt" },

  // CRITICAL: Ensure token/session always contain required fields
  callbacks: {
    async jwt({ token, account, profile, user }) {
      // On first sign-in, NextAuth gives us `user` & `account`.
      if (account && user) {
        token.provider = account.provider;
        token.accessToken = account.access_token;
      }

      // Set required IDs; fallback to existing token.id if present.
      // NextAuth default User object may not include .id unless your adapter/provider returns it.
      // GitHub provider supplies `profile.id` (number); convert to string.
      if (!token.id) {
        const ghId =
          profile && typeof (profile as any).id !== "undefined"
            ? String((profile as any).id)
            : user?.id; // if using an adapter, user.id should exist
        token.id = ghId ?? "unknown";
      }

      // Helpful extras
      if (profile && typeof (profile as any).login === "string") {
        token.githubLogin = (profile as any).login;
      }

      return token;
    },

    async session({ session, token }) {
      // Guarantee user object exists with required fields
      session.user = {
        id: token.id ?? "unknown",
        name: session.user?.name ?? null,
        email: session.user?.email ?? null,
        image: session.user?.image ?? null,
        githubLogin: token.githubLogin,
      };

      return session;
    },
  },
};
