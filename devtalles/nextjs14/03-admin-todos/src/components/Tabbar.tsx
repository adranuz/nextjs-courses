"use client";

import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface TabBarProps {
	currentIndex?: number;
	tabOptions?: number[];
}
export const TabBar = ({
	currentIndex = 1,
	tabOptions = [1, 2, 3, 4],
}: TabBarProps) => {
	const router = useRouter();
	const [selected, setSelected] = useState(currentIndex);
	const onTabSelected = (tab: number) => {
		setSelected(tab);
		setCookie("selectedTab", tab.toString());
		router.refresh();
	};
	return (
		<div
			className={
				"grid w-full space-x-2 rounded-xl bg-gray-200 p-2" +
				" grid-cols-" +
				tabOptions.length
			}
		>
			{tabOptions.map((tab) => (
				<div key={tab}>
					<input
						onChange={() => {}}
						checked={selected === tab}
						type="radio"
						id={tab + ""}
						className="peer hidden"
					/>
					<label
						onClick={() => onTabSelected(tab)}
						className="tansition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
					>
						{tab}
					</label>
				</div>
			))}
		</div>
	);
};
