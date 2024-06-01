import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Next.js Sandbox</h1>

      <ul>
        <ul>
          <Link href="/auth">Basic authentication</Link>
        </ul>
        <ul>
          <Link href="/form">Form using server actions</Link>
        </ul>
      </ul>
    </main>
  );
}
