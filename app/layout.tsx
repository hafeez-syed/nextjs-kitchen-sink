import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hi from Next Kitchen Sink App Root Layout",
  description: "Description from Root layout",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://attraqt.one/core",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <h1>Next.js Kitchen Sink App</h1>
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
              <br />
              <Link href="/about" prefetch={false}>
                About
              </Link>
              <br />
              <Link href="/team">Team </Link>
              <br />
              <Link href="/team/about">Team About </Link>
              <br />
              <Link href="/products">Products </Link>
              <br />
              <Link href="/dynamic-route">Dynamic Route </Link>
              <br />
              <Link href="/nested-routes">Nested Routes </Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
