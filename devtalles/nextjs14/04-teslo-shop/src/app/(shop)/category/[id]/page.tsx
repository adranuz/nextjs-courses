import { ProductGrid, Title } from "@/components";
import { Product, ProductGender } from "@/interfaces";
import { initialData } from "@/seed/seed";
const products = initialData.products;

interface Props {
  params: {
    id: ProductGender;
  }
}

export default function CategoryPage({params}: Props) {
  const {id} = params;
  const filteredProducts = products.filter((product: Product) => product.gender === id);
  // const labels: {[key: ProductGender]:string} = {
  const labels: Record<ProductGender, string> = {
    "men": "Hombres",
    "women": "Mujeres",
    "kid": "Niños",
    "unisex": "Unisex",
  }
  return (
    <>
      <Title title={`Articulos de ${(labels as any)[id]}`} subtitle={""} className="mb-2"/>
      <ProductGrid products={filteredProducts}/>
    </>
  );
}