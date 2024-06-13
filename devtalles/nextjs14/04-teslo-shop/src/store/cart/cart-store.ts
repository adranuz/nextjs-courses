import { getStockProductBySlug } from "@/actions";
import { CartProduct, ProductSize } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SummaryInformation {
	subTotal: number;
	tax: number;
	total: number;
	itemsInCart: number;
}
interface CartState {
	cart: CartProduct[];
	getTotalItems: () => number;
	getSummaryInformation: () => SummaryInformation;
	addProductToCart: (product: CartProduct) => void;
	updateProductQuantity: (
		quantity: number,
		slug: string,
		size: ProductSize
	) => void;
	removeProduct: (slug: string, size: ProductSize) => void;
}
export const useCartStore = create<CartState>()(
	// persists puede ser configurado para guardar la info en cookies, local o session storage
	// en cookies, se mandan en los headers a todas las peticiones http
	// en session storage, solo se guarda en el cliente
	// en local storage, se guarda en el cliente y persiste entre sesiones
	persist(
		// middleware para guardar el store en el cache
		(set, get) => ({
			cart: [],
			addProductToCart: (product: CartProduct) => {
				const { cart } = get();

				// 1 revisar si el producto ya esta en el carrito
				const productInCard = cart.some(
					(p) => p.id === product.id && p.size === product.size
				);
				if (!productInCard) {
					set({ cart: [...cart, product] });
					return;
				}

				// 2 si el producto ya esta en el carrito, actualizar la cantidad
				const newCart = cart.map((p) => {
					if (p.id === product.id && p.size === product.size) {
						return { ...p, quantity: p.quantity + product.quantity };
					}
					return p;
				});
				set({ cart: newCart });
			},
			getTotalItems: () => {
				const { cart } = get();
				let count = 0;
				cart.forEach((p) => {
					count += p.quantity;
				});
				return count;
			},
			updateProductQuantity: async (
				quantity: number,
				slug: string,
				size: ProductSize
			) => {
				const inStock = await getStockProductBySlug(slug);
				const { cart } = get();
				console.log(inStock, quantity);
				const newCart = cart.map((p) => {
					if (p.slug === slug && p.size === size) {
						return { ...p, quantity };
					}
					return p;
				});
				set({ cart: newCart });
			},
			removeProduct: (slug: string, size: ProductSize) => {
				const { cart } = get();
				const newCart = cart.filter((p) => {
					const isDifferentProduct = p.slug !== slug || p.size !== size;

					return isDifferentProduct;
				});
				set({ cart: newCart });
			},
			getSummaryInformation: () => {
				const { cart } = get();
				let subTotal = 0;
				let itemsInCart = 0;
				cart.forEach((p) => {
					subTotal += p.price * p.quantity;
					itemsInCart += p.quantity;
				});
				const tax = subTotal * 0.15;
				const total = subTotal * 1.15;
				return { subTotal, tax, total, itemsInCart };
			},
		}),
		{
			name: "shopping-cart",
			// esta configuracion es para manejar la hidratacion del store mediante zustand
			// si se pone true, nosotros nos encargaremos de la hidratacion
			// skipHydration: true, // default false
		}
	)
);
