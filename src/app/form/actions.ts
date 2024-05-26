"use server";

import sleep from "@/util/sleep";

/**
 * A example server action, called when the form is submitted
 *
 * @param formData - The form data
 */
export async function signUp(
  prevState: { message: string },
  formData: FormData,
) {
  "use server";

  const user = {
    name: formData.get("name"),
    email: formData.get("email"),
  };

  // Simulate the backend doing some work,
  // so we can show the loading state
  await sleep(1000);

  // Call whatever backend code to sign a user up
  // await signupUser(user);

  return { message: "User signed up successfully" };
}
