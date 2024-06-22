"use client";

import * as React from "react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function Page() {
	const [progress, setProgress] = React.useState(13);

	React.useEffect(() => {
		// inicializa el intervalo y el temporizador
		const interval = setInterval(() => {
			setProgress((prev) => {
				// si es mayor o igual a 100, detiene el intervalo y devuelve 100
				if (prev >= 100) {
					clearInterval(interval);
					return 100;
				}
				// si es menor a 100, incrementa en 1
				return prev + 1;
			});
		}, 100);

		// funcion de limpieza, para borrar la funcionalidad cuando el componente se desmonte
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="">
			<Progress
				value={progress}
				className="w-[100%]"
				indicatodColor={cn({
					"bg-primary": progress < 50,
					"bg-destructive": progress >= 50 && progress < 75,
					"bg-accent": progress >= 75 && progress < 100,
					"bg-teal-500": progress >= 100,
				})}
			/>
		</div>
	);
}
