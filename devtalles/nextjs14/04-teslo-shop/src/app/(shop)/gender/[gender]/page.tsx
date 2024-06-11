// revalidar informacion cada 60- segundos para ver las actualizaciones
export const revalidate = 60

import { getPaginatedProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { ProductGender } from "@/interfaces";
import { initialData } from "@/seed/seed";
const products = initialData.products;

interface Props {
  params: {
    gender: ProductGender;
  },
  searchParams: {
    page?: string
  }
}

export default async function CategoryPage({params, searchParams}: Props) {
  const {gender} = params;
  const page = searchParams.page ? Number(searchParams.page) : 1

  const { products, totalPages } = await getPaginatedProductsWithImages({page, gender});
  const labels: Record<ProductGender, string> = {
    "men": "Hombres",
    "women": "Mujeres",
    "kid": "Niños",
    "unisex": "Unisex",
  }
  return (
    <>
      <Title title={`Articulos de ${(labels as any)[gender]}`} subtitle={""} className="mb-2"/>
      <ProductGrid products={products}/>
      <Pagination totalPages={totalPages}/>
    </>
  );
}