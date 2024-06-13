import { Title } from "@/components";
import Link from "next/link";
import { ProductsInCart } from "./ui/ProductsInCart";
import { ProductSumary } from "./ui/ProductSumary";


export default function CartPage() {
	return (
		<section className="flex justify-center items-center mb-72 px 10 sm:px-0 md:px-4">
			<div className="flex flex-col">
				<Title title="Carrito" />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Carrito de compras */}
					<div className="flex flex-col mt-5 gap-2">
						<span className="text-xl">Agregar mas items</span>
						<Link href="/" className="underline mb-5">
							Continua comprando
						</Link>

						{/* Items */}
						<ProductsInCart />
					</div>

					{/* Summary o checkout */}
					<ProductSumary />
				</div>
			</div>
		</section>
	);
}
