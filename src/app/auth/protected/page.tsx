import Link from "next/link";
import { ensureAuthenticated } from "../auth";

export default function Page() {
  ensureAuthenticated();

  return (
    <div>
      <h1>Protected</h1>
      <p>This page is protected, it requires authentication</p>
      <p>
        <Link href="/auth">Click here to return to the auth page</Link>
      </p>
    </div>
  );
}
