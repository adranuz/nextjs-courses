'use client'

import { Calendar } from "@/components/ui/calendar";
import React from "react";


export default function Page() {
	const [date, setDate] = React.useState<Date | undefined>(new Date())
	const [multipleDates, setMultipleDates] = React.useState<Date[]|undefined>([])

	const smallDate = date?.toLocaleDateString("es-ES", {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric",
	});
  return (
		<div className="flex flex-col flex-wrap sm:flex-row gap-4">
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
				disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
			/>
			<Calendar
				mode="single"
				selected={date}
				onSelect={setDate}
				className="rounded-md border"
				disabled={(date) => date < new Date()}
			/>
			<Calendar
				mode="multiple"
				selected={multipleDates}
				onSelect={setMultipleDates}
				className="rounded-md border"
			/>

			<div>
				<h1 className="text-3xl">Information</h1>
				<div className="border-b">
					<p>{smallDate}</p>
					<p>{multipleDates?.map(date => date.toLocaleDateString()).join(', ')}</p>
					</div>
			</div>
		</div>
	);
}