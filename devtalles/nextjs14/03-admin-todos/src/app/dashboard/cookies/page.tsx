import { TabBar } from "@/components/Tabbar";
import { cookies } from "next/headers";

export const metadata = {
	title: "Cookies Page",
	description: "Cookies",
};

export default function Page() {
	const cookieStore = cookies()
	const cookieTab = cookieStore.get("selectedTab")?.value ?? '1';

	const allCookies = cookieStore.getAll()
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
			{/* <pre>{JSON.stringify(allCookies, null, 2)}</pre> */}
			<div className="flex flex-col">
				<span className="text-3xl">Tabs</span>
        <TabBar currentIndex={+cookieTab} />
			</div>
		</div>
	);
}
