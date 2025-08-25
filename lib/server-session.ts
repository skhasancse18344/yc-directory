import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function requireServerSession() {
  const session = await getServerSession(authOptions);
  return session; // typed with our augmented Session
}
