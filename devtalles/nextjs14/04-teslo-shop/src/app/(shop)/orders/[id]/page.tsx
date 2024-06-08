import { Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { IoCardOutline } from "react-icons/io5";

interface Props {
	params: {
		id: string;
	};
}
const productsInCart = [
	initialData.products[0],
	initialData.products[1],
	initialData.products[2],
	initialData.products[3],
];
export default function OrderIdPage({ params }: Props) {
	// todo: verificar si hay un id valido, o redirect
	return (
		<section className="flex justify-center items-center mb-72 px 10 sm:px-0 md:px-4">
			<div className="flex flex-col">
				<Title title={`Orden #${params.id}`} />
				<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
					{/* Carrito de compras */}
					<div className="flex flex-col mt-5 gap-2">
						<div
							className={clsx(
								"flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
								{ "bg-red-500": true, "bg-green-500": true }
							)}
						>
							<IoCardOutline className="mr-2 text-xl" />
							{/* <span>Pendiente de pago</span> */}
							<span>Orden pagada</span>
						</div>
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
									<p>Subtotal: ${product.price * 3}</p>
								</div>
							</div>
						))}
					</div>

					{/* Summary o checkout */}
					<div className="bg-white rounded-xl shadow-xl p-7 self-start">
						<h2 className="text-2xl mb-2">Direccion de entrega</h2>
						<div>
							<p>Adrian Garcia</p>
							<p>Av Siempre viva</p>
							<p>Alcaldia cuautemoc</p>
							<p>cd mex</p>
							<p>CP: 12312312</p>
						</div>
						<div className="w-full h-0.5 rounded bg-gray-100 my-5"></div>
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
							<div
								className={clsx(
									"flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
									{ "bg-red-500": true, "bg-green-500": true }
								)}
							>
								<IoCardOutline className="mr-2 text-xl" />
								{/* <span>Pendiente de pago</span> */}
								<span>Orden pagada</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
