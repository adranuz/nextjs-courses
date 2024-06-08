import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";
import Link from "next/link";

const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
	initialData.products[3],
];
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
						{productsInCart.map((product) => (
							<div key={product.slug} className="flex">
								<Image
									src={`/products/${product.images[0]}`}
									alt={product.title}
									width={100}
									height={100}
									className="mr-5 rounded object-cover"
								/>
								<div>
									<p>{product.title}</p>
									<p>${product.price}</p>
									<QuantitySelector quantity={3} />
									<button className="underline mt-3">Remover</button>
								</div>
							</div>
						))}
					</div>

					{/* Summary o checkout */}
					<div className="bg-white rounded-xl shadow-xl p-7 self-start">
						<span className="text-2xl mb-2">Resumen de compra</span>
						<div className="grid grid-cols-2">
							<span>No. Productos</span>
							<span className="text-right">3 Articulos</span>
							<span>Subtotal</span>
							<span className="text-right">$100</span>
							<span>Impuestos (15%)</span>
							<span className="text-right">$15</span>
							<span className="mt-5 text-2xl">Total</span>
							<span className="mt-5 text-2xl text-right">$115</span>
						</div>
            <div className="mt-5 mb-2 ">
  						<Link href="/checkout/address" className="flex justify-center btn-primary">Checkout</Link>
            </div>
					</div>
				</div>
			</div>
		</section>
	);
}
