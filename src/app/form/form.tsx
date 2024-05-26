"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { signUp } from "./actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Submit
    </button>
  );
}

export function Form() {
  const [state, formAction] = useActionState(signUp, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="name">Enter Task</label>
      <input type="text" id="name" name="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />

      <SubmitButton />

      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
