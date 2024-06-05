import Image from "next/image";
import { Loader } from '../../shared/Loader/loader';
import { Product } from "./Product";

// "use client"
const getProducts = async () => {
	try {
		const response = await fetch(
			process.env.SHOPIFY_HOSTNAME + "/admin/api/2023-10/products.json",
			{
				method: "GET",
				headers: new Headers({
					"X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
				}),
			}
		);
		const data = await response.json();
		return data.products;
	} catch (error) {
		console.log(error);
		return [];
	}
};

export const MainProduct = async () => {
	const products: Product[] = await getProducts();
	// console.log(products[0]);
	return (
		<section className="container">
			<h3 className="text-3xl text-center font-bold my-8">✨ Main products released!</h3>
			<div className="flex flex-row flex-wrap justify-center ">
				{products.map((product) => {
					const imageSrc = product.images[0].src;
					return (
						<article key={product.id} className="relative h-80 w-96">
							<Image src={imageSrc} alt={product.title} loading="eager" fill/>
							<div className="absolute inset-0 bg-black opacity-30"></div>
							<h4 className="absolute font-bold w-1/2 text-right right-5 top-5 ">{product.title}</h4>
							{/* <p>{product.body_html}</p> */}
						</article>
					);
				})}
			</div>
			<Loader />
		</section>
	);
};
