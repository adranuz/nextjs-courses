'use client'
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
  quantity: number;
}
export const QuantitySelector = ({quantity}:Props) => {
  const [count, setCount] = useState(1);
  const onAdd = () => {
    if (count < quantity) {
      setCount(count + 1);
    }
  }
  const onRemove = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }
  return (
    <div className="flex">
      <button onClick={onRemove}>
        <IoRemoveCircleOutline size={30} />
      </button>
      <span className="w-20 mx-3 px-5 bg-gray-100 text-center rounded">{count}</span>
      <button onClick={onAdd}>
        <IoAddCircleOutline size={30} />
      </button>
    </div>
  )
}
