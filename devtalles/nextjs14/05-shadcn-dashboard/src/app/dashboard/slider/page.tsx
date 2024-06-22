"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function Page() {
	const [values, setValue] = useState(30);
	const [rangeValue, setRangeValue] = useState([10,20]);
	return (
		<div className="">
			<span>slider value: {values}</span>
			<Slider
				defaultValue={[values]}
				onValueChange={(value) => setValue(value[0])}
				max={100}
				step={1}
				// className={cn("w-[60%]")}
			/>

			<span>slider value: {rangeValue.join(',')}</span>
			<Slider
				defaultValue={rangeValue}
				onValueChange={setRangeValue}
				max={100}
				step={1}
				// className={cn("w-[60%]")}
			/>
		</div>
	);
}
