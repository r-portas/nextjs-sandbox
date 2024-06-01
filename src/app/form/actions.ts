"use server";

import sleep from "@/util/sleep";

/**
 * A example server action, called when the form is submitted
 *
 * @param formData - The form data
 */
export async function addTask(
  prevState: { message: string },
  formData: FormData,
) {
  "use server";

  const task = {
    name: formData.get("name"),
  };

  // Simulate the backend doing some work,
  // so we can show the loading state
  await sleep(1000);

  const message = `Task "${task.name}" created`;

  // Call whatever backend code to sign a user up
  console.log(`Server Action: ${message}`);

  return { message };
}
