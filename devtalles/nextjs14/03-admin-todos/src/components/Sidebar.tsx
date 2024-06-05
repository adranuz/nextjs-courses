import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiCoffeeBean, CiLogout, CiShoppingBasket, CiSquareCheck, CiUser, CiViewList } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarLogout } from './SidebarLogout';

const sidebarItems = [
	{
		title: "Dashboard",
		href: "/dashboard",
		icon: <CiBookmarkCheck size={30} />,
	},
	{
		title: "Rest TODOS",
		href: "/dashboard/rest-todos",
		icon: <CiSquareCheck size={30} />,
	},
	{
		title: "Server Actions",
		href: "/dashboard/server-actions",
		icon: <CiViewList size={30} />,
	},
	{
		title: "Cookies",
		href: "/dashboard/cookies",
		icon: <CiCoffeeBean size={30} />,
	},
	{
		title: "Products cart",
		href: "/dashboard/products",
		icon: <CiShoppingBasket size={30} />,
	},
	{
		title: "Profile",
		href: "/dashboard/profile",
		icon: <CiUser size={30} />,
	},
];

export const Sidebar = async () => {
	const session = await auth();

	const userImage = session?.user?.image || "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
	
	const userName = session?.user?.name || "No name"

	const useRoles = session?.user?.roles || ['client']

	return (
		<aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
			<div>
				<div className="-mx-6 px-6 py-4">
					<Link href="/dashboard" title="home">
						<Image
							src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
							className="w-32"
							alt="tailus logo"
              width={128}
              height={32}
						/>
					</Link>
				</div>

				<div className="mt-8 text-center">
					<Image
						src={userImage}
						alt=""
						className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
            width={128}
            height={32}
					/>
					<h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
						{userName}
					</h5>
					<span className="hidden text-gray-400 lg:block capitalize">
						{useRoles.join(", ")}
					</span>
				</div>

				<ul className="space-y-2 tracking-wide mt-8">
					{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
					{sidebarItems.map((item, index) => (
						<SidebarItem key={index} {...item} />
					))}
				</ul>
			</div>

			<div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
				<SidebarLogout/>
			</div>
		</aside>
	);
};
