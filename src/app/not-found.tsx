import type { Metadata } from "next";
import Link from "next/link";
import { Mark } from "@/components/Mark";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

/* Styled from globals.css (the `.missing` rules): a stylesheet of its own
   would be preloaded on every page, since any page can show this one. */
export default function NotFound() {
  return (
    <main id="main" className="wrap missing">
      <Mark size={48} />
      <h1>This page doesn&apos;t exist.</h1>
      <p>The address may be mistyped, or the page may have moved.</p>
      <Link className="link" href="/">
        Go to the home page
      </Link>
    </main>
  );
}
