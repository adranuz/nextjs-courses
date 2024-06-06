'use client'
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
	product: Product;
}
export const ProductGridItem = ({ product }: Props) => {
  // console.log(product.images[0])
  const [showedImage, setShowedImage] = useState(product.images[0])
	return (
		<div className="rounded-md overflow-hidden fade-in">
			<Link href={`/product/${product.slug}`} >
				<Image
					src={`/products/${showedImage}`}
					alt={product.title}
					className="w-full object-cover rounded-md"
					width={500}
					height={500}
          onMouseEnter={() => {setShowedImage(product.images[1])}}
          onMouseLeave={() => {setShowedImage(product.images[0])}}
				/>
			</Link>
			<div className="p-4 flex flex-col">
				<Link
					href={`/product/${product.slug}`}
					className="hover:text-blue-600"
				>
					<h3 className="text-sm font-semibold mt-2">{product.title}</h3>
					<span className="text-lg font-semibold mt-2">${product.price}</span>
				</Link>
			</div>
		</div>
	);
};
