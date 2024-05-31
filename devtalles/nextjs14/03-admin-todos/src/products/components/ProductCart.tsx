'use client' // porque vamos a usar actions
import Image from "next/image"
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5"
import { Star } from "./Star";
import { addProductToCart, getCookieCart, removeProductFromCart } from "@/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";
export interface Props {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}
export const ProductCard = (props: Props) => {
  const router = useRouter()
  const onAddProduct = () => {
    addProductToCart(props.id)
    router.refresh()
  }
  const getTotalCount = () => {
    const total = getCookieCart()
    const thisProductCount = total[props.id] ?? 0
    router.refresh()

    return thisProductCount
  }
  const onRemoveProduct = () => {
    removeProductFromCart(props.id)
    router.refresh()
  }

  const totalCount = getTotalCount()
  return (
    <div className="bg-white shadow rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
            width={500}
            height={500}
            className="rounded" 
            src={props.image}
            alt="product image" />
      </div>
      {/* Title */}
      <div className="px-5 pb-5">
        <a href="#">
          <h3 className="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
            {props.name}</h3>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          {Array(props.rating).fill(0).map((_, i) => (
            <Star key={i} />
          ))}
          {/* Rating Number */}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {props.rating.toFixed(1)}
          </span>
        </div>


        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">${props.price}</span>
          <div className="flex">
            <button
              onClick={onAddProduct}
              className="text-white mr-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <IoAddCircleOutline size={25} />
            </button>
              <button
              disabled={totalCount === 0}
              onClick={onRemoveProduct}
              className={"text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"}>
                {totalCount}
                <IoTrashOutline size={20} />
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}