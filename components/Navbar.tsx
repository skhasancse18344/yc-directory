// app/components/Navbar.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

// import { getServerSession } from "next-auth";
// import { authOptions } from "@/lib/auth";

// export default async function Navbar() {
//   const session = await getServerSession(authOptions);

export default function Navbar() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={144} height={30} />
          </Link>
          <button disabled className="px-3 py-1 text-sm rounded-md border">
            Loading…
          </button>
        </nav>
      </header>
    );
  }

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-4">
          {session ? (
            <>
              <div className="flex items-center gap-2">
                {session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? session.user.email ?? "User"}
                    width={28}
                    height={28}
                    className="rounded-full"
                  />
                )}
                <span className="text-sm text-black">
                  {session.user.name ?? session.user.email ?? "Signed in"}
                </span>
              </div>

              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="px-3 py-1 text-sm rounded-md border bg-cyan-950 hover:bg-cyan-900 text-white"
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn("github")}
              className="px-3 py-1 text-sm rounded-md border bg-cyan-950 hover:bg-cyan-900 text-white"
            >
              Sign in with GitHub
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
