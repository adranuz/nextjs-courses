"use client";
import { getStockProductBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import React from "react";
// import React from "react";
interface Props {
	slug: string;
}
export const StockLabel = ({ slug }: Props) => {
	const [stock, setStock] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		getStock();
	}, []);

	const getStock = async () => {
		const inStock = await getStockProductBySlug(slug);
		console.log({ inStock });
		setStock(inStock);
    setIsLoading(false);

		return inStock;
	};

	return (
		<>
			{!isLoading ? (
				<h1 className={`${titleFont.className} antialiased font-bold text-lg`}>
					Stock: {stock}
				</h1>
			) : (
				<h1
					className={`${titleFont.className} antialiased font-bold text-lg bg-gray-200 animate-pulse`}
				>
					&nbsp;
				</h1>
			)}
		</>
	);
};
