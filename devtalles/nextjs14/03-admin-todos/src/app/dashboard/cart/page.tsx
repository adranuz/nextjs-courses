import { Product, products } from "@/products/data/products";
import { ItemCard } from "@/shopping-cart/components/ItemCart";
import { cookies } from "next/headers";
import { WidgetItem } from "@/components/WidgetItem";

interface ProductInCart {
	product: Product;
	quantity: number;
}
const getProductsInCart = (cart: { [id: string]: number }): ProductInCart[] => {
	const productsInCart: ProductInCart[] = [];
	for (const id of Object.keys(cart)) {
		const product = products.find((product) => product.id === id);
		if (product) {
			productsInCart.push({
				product: product,
				quantity: cart[id],
			});
		}
	}
	return productsInCart;
};

export default function CartPage() {
	const cookiesStore = cookies();
	const cart = JSON.parse(cookiesStore.get("cart")?.value ?? "{}");
	const productsInCart = getProductsInCart(cart);

	const total = productsInCart.reduce((acc, {product, quantity}) => (acc += product.price * quantity), 0);

	return (
		<div>
			<h1 className="text-5xl">Productos en el carrito</h1>
			<hr className="mb-2 text-black" />
			<div className="flex flex-col sm:flex-row gap-2 w-full">
				<div className="flex flex-col gap-2 w-full sm:w-8/12">
					{productsInCart.length === 0 ? (
						<h2>No hay productos en el carrito</h2>
					) : (
						productsInCart.map((productInCart, id) => (
							<ItemCard key={id} {...productInCart} />
						))
					)}
				</div>
				<div className="flex flex-col w-4/12">
					<WidgetItem title="Total a pagar">
						<div className="mt-2 flex flex-col justify-center gap-4">
							<h3 className="text-3xl font-bold text-gray-700">$...{(total*1.15).toFixed(2)}</h3>
							<span className="font-bold text-center text-gray-500">Impuestos 15%: {(total*0.15).toFixed(2)}</span>
						</div>
					</WidgetItem>
				</div>
			</div>
		</div>
	);
}
