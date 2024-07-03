import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hi from Team Layout",
  description: "Description from Team layout",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2>Team Layout</h2>
      {children}
    </>
  );
}
