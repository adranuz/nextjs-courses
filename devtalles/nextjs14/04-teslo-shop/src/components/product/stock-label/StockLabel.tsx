"use client";
import { getStockProductBySlug } from "@/actions";
import { titleFont } from "@/config/fonts";
import React from "react";

// el slug se obtiene por medio de props
interface Props {
	slug: string;
}


export const StockLabel = ({ slug }: Props) => {
	// el stock se maneja mediante el state
	const [stock, setStock] = React.useState(0);
	const [isLoading, setIsLoading] = React.useState(true);

	// en el primer render se obtiene el stock
	React.useEffect(() => {
		getStock();
	}, []);

	// funcion handler para manejar el stock
	const getStock = async () => {
		const inStock = await getStockProductBySlug(slug);
		setStock(inStock);
    setIsLoading(false);

		return inStock;
	};

	// si no se ha obtenido el stock se muestra un loading
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
