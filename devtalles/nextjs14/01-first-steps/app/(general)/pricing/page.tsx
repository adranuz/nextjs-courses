import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Pricing Page - Adranuz",
	description: "SEO Title",
	keywords: ["Pricing page", "Information", "Adranuz"],
};
export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <span className="text-5xl">PricingPage</span>
    </main>
  );
}