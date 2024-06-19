"use client";
import { logout } from "@/actions";
import { useUIStore } from "@/store";
import { clsx } from "clsx";
import Link from "next/link";
import {
	IoCloseOutline,
	IoLogInOutline,
	IoLogOutOutline,
	IoPeopleOutline,
	IoPersonOutline,
	IoSearchOutline,
	IoShirtOutline,
	IoTicketOutline,
} from "react-icons/io5";
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";

export const Sidebar = () => {
	const router = useRouter();
	const { closeSideMenu, isSideMenyOpen } = useUIStore();

	const { data: session } = useSession();


	const { push } = useRouter();
	const logoutHandler = () => {
		logout();
		closeSideMenu();
	};

	const loginHandler = () => {
		push("/auth/login");
		closeSideMenu();
	}

	const handleUpdate = () => {
		router.refresh();

	}

	return (
		<div className="">
			{isSideMenyOpen && (
				<>
					{/* Background black */}
					<div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>

					{/* Blur */}
					<div className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm "></div>
				</>
			)}

			{/* Sidebar */}
			<nav
				className={clsx(
					"fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
					{ "translate-x-full": !isSideMenyOpen }
				)}
			>
				<IoCloseOutline
					size={50}
					className="absolute top-5 right-5 cursor-pointer"
					onClick={() => {
						closeSideMenu();
					}}
				/>

				{/* input */}
				<div className="relative mt-14">
					<IoSearchOutline size={20} className="absolute top-2 left-2" />
					<input
						type="text"
						placeholder="Buscar"
						className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500 transition-all duration-300"
					/>
				</div>

				{/* Options del menu */}
				<Link
					href="/profile"
					className="flex items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
				>
					<IoPersonOutline size={30} />
					<span className="ml-3 text-xl">Perfil</span>
				</Link>
				<Link
					href="/"
					className="flex items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
				>
					<IoTicketOutline size={30} />
					<span className="ml-3 text-xl">Ordenes</span>
				</Link>

				{!session?.user && (
					<button
						onClick={loginHandler}
						className="flex w-full items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
					>
						<IoLogInOutline size={30} />
						<span className="ml-3 text-xl">Login</span>
					</button>
				)}

				{!!session?.user && (
					<button
						onClick={logoutHandler}
						className="flex w-full items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
					>
						<IoLogOutOutline size={30} />
						<span className="ml-3 text-xl">Logout</span>
					</button>
				)}

				{/* Divider */}
				<div className="w-full h-px bg-gray-200 my-10"></div>

				<Link
					href="/"
					className="flex items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
				>
					<IoShirtOutline size={30} />
					<span className="ml-3 text-xl">Products</span>
				</Link>
				<Link
					href="/"
					className="flex items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
				>
					<IoTicketOutline size={30} />
					<span className="ml-3 text-xl">Ordenes</span>
				</Link>
				<Link
					href="/"
					className="flex items-center mt-10 p-2 bg-gray-50  hover:bg-gray-100 rounded transition-all"
				>
					<IoPeopleOutline size={30} />
					<span className="ml-3 text-xl">Usuarios</span>
				</Link>
			</nav>
		</div>
	);
};
