"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthButton() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <button disabled>Loading…</button>;
  }

  if (!session) {
    return (
      <button onClick={() => signIn("github")}>Sign in with GitHub</button>
    );
  }

  // Thanks to type augmentation + callbacks, session.user is guaranteed
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <span>
        {session.user.name ??
          session.user.email ??
          session.user.githubLogin ??
          "Signed in"}
      </span>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
  );
}
