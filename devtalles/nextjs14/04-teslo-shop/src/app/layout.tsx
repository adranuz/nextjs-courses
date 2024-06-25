import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/config/fonts";
import { Provider } from "@/components";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
	title: {
		template: "%s - Teslo | Shop",
		default: "Home - Teslo | Shop",
	},
	description: "A virtual shop for all your needs",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}>
				<Provider>{children}</Provider>
				{/* /{children} */}
				<Toaster />
			</body>
		</html>
	);
}
