"use server";

import { login, logout } from "./auth";

export async function loginAction(
  prevState: { message: string },
  formData: FormData,
) {
  "use server";

  const username = formData.get("username");
  const password = formData.get("password");

  if (!username || !password) {
    return { message: "Username and password is required" };
  }

  login(username.toString(), password.toString());

  const message = `Logged in as ${username}`;
  return { message };
}

export async function logoutAction() {
  logout();
  return { message: "Logged out" };
}
