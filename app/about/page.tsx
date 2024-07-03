import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Title",
  description: "About description",
  openGraph: {
    type: "profile",
    locale: "en_AU",
    url: "https://attraqt.one/core/about",
    firstName: "Hafeez",
    lastName: "Syed",
  },
};

export default function About() {
  return <h3>About</h3>;
}
