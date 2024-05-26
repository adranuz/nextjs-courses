import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Page - Adranuz",
	description: "SEO Title",
	keywords: ["About page", "Information", "Adranuz"],
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <span className="text-5xl">Acerca de</span>
    </main>
  );
}