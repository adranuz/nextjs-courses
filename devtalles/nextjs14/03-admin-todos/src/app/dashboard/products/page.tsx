import { ProductCard } from "@/products/components/ProductCart";
import { products } from "@/products/data/products";

export default function ProductsPage() {
  // console.log(products)
  const productList = [...products]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {
        productList.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      }
    </div>
  )
}