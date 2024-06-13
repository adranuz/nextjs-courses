"use client";

import { QuantitySelector } from "@/components";
import { useCartStore } from "@/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ProductsInCart = () => {
	const [isLoading, setIsLoading] = useState(true);
	// obtiene el listado y metodos del store
	const { cart, updateProductQuantity, removeProduct } = useCartStore();

	// muestra un loader en lo que se obtiene el store
	useEffect(() => {
		setIsLoading(false);
	}, []);

	if (isLoading) {
		return <p>Cargando...</p>;
	}
	// todo: agregar skeleton de la lista


	// el contenido se genera a traves del array de articulos
	// donde a demas de retornar cada articulo, se le pasan los metodos
	// para modificar la cantidad, y remover
	return (
		<>
			{cart.map((product) => {
				const handleQuantityChange = (quantity: number) => {
					console.log(quantity)
					if (quantity < 1) return;
					updateProductQuantity(quantity, product.slug, product.size);
				};
				const handleRemoveProduct = () => {
					console.log(product.slug, product.size)
					removeProduct(product.slug, product.size);
				}

				return (
					<div key={product.slug.concat(product.size)} className="flex">
						<Image
							src={`/products/${product.image}`}
							alt={product.title}
							width={100}
							height={100}
							className="mr-5 rounded object-cover"
						/>
						<div>
							<Link
								className="hover:underline cursor-pointer"
								href={`/product/${product.slug}`}
							>
								{product.title}
							</Link>
							<p>
								${product.price} x {product.quantity}
							</p>
							<p>Size: {product.size}</p>
							<QuantitySelector
								quantity={product.quantity}
								onQuantityChange={handleQuantityChange}
							/>
							<button onClick={handleRemoveProduct} className="underline mt-3">Remover</button>
						</div>
					</div>
				);
			})}
		</>
	);
};
