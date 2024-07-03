import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Team",
  openGraph: {
    type: "profile",
    locale: "en_AU",
    firstName: "Team",
    lastName: "One",
  },
};

export default function AboutTeam() {
  return <h3>About Team</h3>;
}
