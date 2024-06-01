import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export function login(username: string, password: string) {
  const cookieStore = cookies();
  cookieStore.set("user", username, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // One week
    path: "/",
  });
}

export function logout() {
  const cookieStore = cookies();
  cookieStore.delete("user");
}

export function getUser(): string | undefined {
  const cookieStore = cookies();
  return cookieStore.get("user")?.value;
}

export function ensureAuthenticated() {
  const user = getUser();
  if (!user) {
    redirect("/auth/");
  }
}
