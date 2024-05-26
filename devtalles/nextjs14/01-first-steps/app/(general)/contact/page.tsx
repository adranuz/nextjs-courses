import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Page - Adranuz",
	description: "SEO Title",
	keywords: ["Contact page", "Information", "Adranuz"],
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <span className="text-5xl">Contact Page</span>
    </main>
  );
}