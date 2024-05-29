'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface Props {
  title: string;
  href: string;
  icon: React.ReactNode;
}

const activeClass = "text-white bg-gradient-to-r from-sky-600 to-cyan-400";

export const SidebarItem = (props: Props) => {
	const pathname = usePathname()
	const [counter, setCounter] = useState(0)
  return (
		<>
			<li>
				<Link
					href={props.href}
					className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group animate-all ${
						pathname === props.href ? " " + activeClass : ""
					}`}
				>
					{props.icon}
					<span onClick={() => {setCounter(counter+1)}} className="-mr-1 font-medium">{props.title} {counter}</span>
				</Link>
			</li>
		</>
	);
}
