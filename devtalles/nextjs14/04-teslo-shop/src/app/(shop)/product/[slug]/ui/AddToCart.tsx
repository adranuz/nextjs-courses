"use client";
import { SizeSelector, QuantitySelector, Title } from "@/components";
import type { Product, ProductSize, CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import clsx from "clsx";
import { useState } from "react";

// obtiene el producto mediante props del padre
interface Props {
	product: Product;
}


export const AddToCart = ({ product }: Props) => {
	// funcion del store para agregar producto al carrito
	const {addProductToCart, } = useCartStore()

	// state para el loading
	const [posted, setPosted] = useState(false);

	// state para la talla, y la cantidad de productos en el carrito
	// se define aqui pero se manda a los hijos
	const [size, setSize] = useState<ProductSize | undefined>();
	const [quantity, setQuantity] = useState<number>(1);

	// handler para cambiar la cantidad de productos, con validaciones
	const handleQuantityChange = (quantity: number) => {
		if (quantity < 1) return;
		if (quantity > product.inStock) return;
		setQuantity(quantity);
	};

	// handler para agregar al carrito, con validaciones para el tipo de CartProduct
	const handleAddToCart = () => {
		setPosted(true);
		if (!size) return;
		const productCart: CartProduct = {
			id: product.id,
			title: product.title,
			price: product.price,
			image: product.images[0],
			slug: product.slug,
			size,
			quantity,
		};

		// Agregar al carrito, y resetear los estados
		addProductToCart(productCart);
		setPosted(false);
		setSize(undefined);
		setQuantity(1);
	};

	return (
		<>
			{/* Titulo */}
			<Title title={product.title} className="text-xl -my-4" />
			<p className="text-llg">${product.price}</p>

			{/* Selector de tallas */}
			{posted && !size && (
				<span className={clsx("mt-2 text-red-500", { hidden: size })}>
					Debe seleccionar una talla*
				</span>
			)}

			{/* Selector de tamaño */}
			<SizeSelector
				sizes={product.sizes}
				selectedSize={size}
				onSizeChange={setSize}
			/>

			{/* Selector de cantidad */}
			<QuantitySelector
				quantity={quantity}
				onQuantityChange={handleQuantityChange}
			/>

			{/* Button para agregar al store del carrito */}
			<button onClick={handleAddToCart} className="btn-primary my-5">
				Agregar al carrito
			</button>
		</>
	);
};
