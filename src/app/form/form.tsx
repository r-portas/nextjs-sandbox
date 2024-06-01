"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { addTask } from "./actions";

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
  const [state, formAction] = useActionState(addTask, initialState);

  return (
    <>
      <form action={formAction}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <SubmitButton />

        <p aria-live="polite" className="sr-only" role="status">
          {state?.message}
        </p>
      </form>
    </>
  );
}
