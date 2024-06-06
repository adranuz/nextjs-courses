export default function AuthLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-red-500 flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Auth Layout</h1>
			{children}
		</main>
	);
}
