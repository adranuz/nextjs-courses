import { ProductSize } from "@/interfaces";
import clsx from "clsx";

interface Props {
	sizes: ProductSize[];
	selectedSize: ProductSize;
}
export const SizeSelector = ({ sizes, selectedSize }: Props) => {
	return (
		<div className="my-5">
			<h3 className="font-bold mb-4">Tallas Disponibles</h3>
			<div className="flex">
        {
          sizes.map((size) => (
            <button
              key={size}
              className={clsx(`mx-2 hover:underline text-lg`, {
                'underline': size === selectedSize,
              })}
            >
              {size}</button>
          ))
        }
      </div>
		</div>
	);
};
