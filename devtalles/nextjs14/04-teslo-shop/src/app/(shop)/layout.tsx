import { Footer, Sidebar, TopMenu } from "@/components";

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<main className="bg-teal-500 flex min-h-screen flex-col">
			<TopMenu />
			<Sidebar />
			{/* <div className="px-0 max-w-[1024px] m-auto sm:px-10 "> */}
			<div className="px-0 py-0 max-w-[1024px] mx-auto">
				{children}
			</div>
			<Footer />
		</main>
	);
}
