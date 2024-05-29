'use client'
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCounter, subtractOne } from "@/store/counter/counterSlice";
import { useEffect, useState } from "react";

export interface CounterResponse {
	method: string;
	count: number;
}

const getApiCounter = async () => {
	const data = await fetch('/api/counter').then(res => res.json());
	return data as CounterResponse;
};


export const CarCounter = ({value}: {value: number}) => {
	const count = useAppSelector((state) => state.counterReducer.count);
	const dispatch = useAppDispatch();




		useEffect(() => {
			getApiCounter().then((data) => dispatch(initCounterState(data.count)) )
			
		}, [dispatch, value]);

  return (
		<>
			<span className="text-9xl">{count}</span>

			<div className="flex">
				<button
					onClick={() => dispatch(addOne())}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					+1
				</button>
				<button
					onClick={() => dispatch(subtractOne())}
					className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
				>
					-1
				</button>
			</div>
		</>
	);
}
