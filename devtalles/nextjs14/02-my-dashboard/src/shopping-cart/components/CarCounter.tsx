'use client'
import { useState } from "react";

export const CarCounter = ({value = 0}: {value?: number}) => {
  const [count, setCount] = useState(value)
  const incremet = () => setCount(count + 1)
  const decremet = () => setCount(count - 1)

  return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex">
				<button
					onClick={incremet}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					+1
				</button>
				<button
					onClick={decremet}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					-1
				</button>
			</div>
		</>
	);
}
