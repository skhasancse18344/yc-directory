import { DefaultSession } from "next-auth";

// 1) Extend the default Session so `user` is always present
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string | null;
      githubLogin?: string;
    } & DefaultSession["user"];
  }

  // 2) (Optional) If you use JWT callbacks, extend the token shape
  interface User {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    githubLogin?: string;
    provider?: string;
    accessToken?: string;
  }
}
