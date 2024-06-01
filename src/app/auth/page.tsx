import { Form } from "./form";
import { getUser } from "./auth";
import Link from "next/link";

export default function Page() {
  const user = getUser();

  return (
    <div>
      <h1>Auth</h1>
      <p>
        An example of to do basic auth, the{" "}
        <Link href="/auth/protected">protected page</Link> ensures the user is
        authenticated before showing content
      </p>
      <p>User: {user}</p>
      <Form />
    </div>
  );
}
