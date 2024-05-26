import { CarCounter } from "@/shopping-cart/components";

export const metadata = {
 title: 'Counter Simple - My Dashboard',
 description: 'Counter Simple',
};

export default function CounterPage() {

  return (
		<div className="flex flex-col items-center justify-center w-full h-full ">
			<span>Productos en el carrito</span>
      <CarCounter value={20}/>
		</div>
	);
};
