import { SizeSelector, Title, SliceShow, QuantitySelector, SliceShowMobile } from "@/components";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}
export default function ProductPage({params}: Props) {
  const product = initialData.products.find((product) => product.slug === params.slug);
  if (!product) notFound()
  return (
    <div className="mb-20 grid md:grid-cols-3 gap-3">

      {/* Slideshow */}
      <div className="col-span-1 md:col-span-2 overflow-hidden">

        {/* SliceShow mobile */}
        <SliceShowMobile title={product.title} images={product.images} className="block md:hidden"/>


        {/* SliceShow desktop */}
        <SliceShow title={product.title} images={product.images} className="hidden md:block"/>

      </div>

      {/* Detalles */}
      <div className="col-span-1 px-5">
        {/* Titulo */}
        <Title title={product.title} className="text-xl -my-4"/>
        <p className="text-llg">${product.price}</p>

        {/* Selector de tallas */}
        <SizeSelector sizes={product.sizes} selectedSize={product.sizes[0]} />
        {/* Selector de cantidad */}
        <QuantitySelector quantity={product.inStock}/>

        {/* Button */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Descripcion */}
        <h3 className="font-bold text-sm">Descripción</h3>
        <p className="font-light">{product.description}</p>
      </div>
    </div>
  );
}