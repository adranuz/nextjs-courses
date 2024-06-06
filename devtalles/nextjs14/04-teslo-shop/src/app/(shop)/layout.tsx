import { Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-teal-500 flex min-h-screen flex-col px-5">
			<TopMenu />
			<Sidebar />
			<div className="px-0 sm:px-10">
				{children}
			</div>
		</main>
	);
}
