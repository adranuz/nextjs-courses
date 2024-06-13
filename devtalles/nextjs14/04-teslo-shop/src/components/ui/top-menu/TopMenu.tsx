"use client";
import { titleFont } from "@/config/fonts";
import { useCartStore, useUIStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {
  // poceso para esperar el estado de zustand para mostrar el valor
  // es darle un momento con useEffect para que se actualice el estado
  const [isLoading, setIsLoading] = useState(true);

	const { openSideMenu } = useUIStore();
	const totalItems = useCartStore((state) => state.getTotalItems());

  useEffect(() => {
    setIsLoading(false)
  }, []);
	return (
		<nav className="flex justify-between items-center w-full">
			{/* Logo */}
			<div>
				<Link href="/">
					<span className={`${titleFont.className} antialiased font-bold`}>
						Teslo
					</span>
					<span> | Shop</span>
				</Link>
			</div>

			{/* Center Menu*/}
			<div className="hidden sm:block">
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/gender/men"
				>
					<span>Hombres</span>
				</Link>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/gender/women"
				>
					<span>Mujeres</span>
				</Link>
				<Link
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
					href="/gender/kid"
				>
					<span>Niños</span>
				</Link>
			</div>

			{/* Search, cart, menu */}
			<div className="flex items-center">
				<Link href="/search" className="mx-2">
					<IoSearchOutline className="w-5 h-5" />
				</Link>
				<Link href={(!isLoading && totalItems !== 0) ? "/cart": "/empty"} className="mx-2">
					<div className="relative">
						{(!isLoading && totalItems !== 0) && (
							<span className="fade-in fade-out absolute text-xs rounded-full px-1 font-bold -top-2 -right-2 bg-blue-700 text-white">
								{totalItems}
							</span>
						)}
						<IoCartOutline className="w-5 h-5" />
					</div>
				</Link>
				<button
					onClick={() => {
						openSideMenu();
					}} // Open side menu on click
					className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
				>
					Menú
				</button>
			</div>
		</nav>
	);
};
