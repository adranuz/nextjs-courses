"use client";
import { useCartStore } from "@/store";
import { currencyFormat } from "@/utils";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ProductSumary = () => {
	// state para el loading
	const [isLoading, setIsLoading] = useState(true);
	
	// obtienes los datos de summary, pero el metodo se ejecuta para obtener el estado
	const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
		state.getSummaryInformation()
	);
	
	// use efect para darle tiempo al store de llegar
	useEffect(() => { setIsLoading(false) },[])

	if(isLoading) return <div>Cargando...</div>

	// interdaz de resumen de compra
	//currencyFormat es una funcion customizada para darle formato a los precios
	return (
		<div className="bg-white rounded-xl shadow-xl p-7 self-start">
			<span className="text-2xl mb-2">Resumen de compra</span>
			<div className="grid grid-cols-2">
				<span>No. Productos</span>
				<span className="text-right">{itemsInCart} Articulo{itemsInCart!==1 &&"s"}</span>
				<span>Subtotal</span>
				<span className="text-right">{currencyFormat(subTotal)}</span>
				<span>Impuestos (15%)</span>
				<span className="text-right">{currencyFormat(tax)}</span>
				<span className="mt-5 text-2xl">Total</span>
				<span className="mt-5 text-2xl text-right">{currencyFormat(total)}</span>
			</div>
			<div className="mt-5 mb-2 ">
				<Link
					href="/checkout/address"
					className="flex justify-center btn-primary"
				>
					Checkout
				</Link>
			</div>
		</div>
	);
};
