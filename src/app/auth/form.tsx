"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { loginAction } from "./actions";

const initialState = {
  message: "",
};

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Login
    </button>
  );
}

export function Form() {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />

      <LoginButton />

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
