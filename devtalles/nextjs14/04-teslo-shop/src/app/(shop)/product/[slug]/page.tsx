export const revalidate = 604800; // revalidate cada 7 dias

import {
	SliceShow,
	SliceShowMobile,
	StockLabel,
} from "@/components";
import { notFound } from "next/navigation";
import { getProduct } from "@/actions";
import { Metadata,  } from "next";
import { AddToCart } from "./ui/AddToCart";

interface Props {
	params: {
		slug: string;
	},
}

export async function generateMetadata(
	{ params }: Props
): Promise<Metadata> {
	// read route params
	const id = params.slug;

	// fetch data
	const product = await getProduct(id);

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = (await parent).openGraph?.images || []

	return {
		title: product?.title ?? "Product not found",
		description: product?.description ?? "Product not found",
		openGraph: {
			title: product?.title ?? "Product not found",
			description: product?.description ?? "Product not found",
      // la url de la imagen debe ser donde se esta guardando la app
      // no en localhost
      images: [`/products/${product.images[0]}`],
		},
	};
}

export default async function ProductPage({ params }: Props) {
	const product = await getProduct(params.slug);

	// const product = initialData.products.find((product) => product.slug === params.slug);
	if (!product) notFound();
	return (
		<div className="mb-20 grid md:grid-cols-3 gap-3">
			{/* Slideshow */}
			<div className="col-span-1 md:col-span-2 overflow-hidden">
				{/* SliceShow mobile */}
				<SliceShowMobile
					title={product.title}
					images={product.images}
					className="block md:hidden"
				/>

				{/* SliceShow desktop */}
				<SliceShow
					title={product.title}
					images={product.images}
					className="hidden md:block"
				/>
			</div>

			{/* Detalles */}
			<div className="col-span-1 px-5">
				{/* Stock */}
				<StockLabel slug={product.slug} />

        <AddToCart product={product}/>
				{/* Descripcion */}
				<h3 className="font-bold text-sm">Descripción</h3>
				<p className="font-light">{product.description}</p>
			</div>
		</div>
	);
}
