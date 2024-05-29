import { WidgetItem } from "@/components/WidgetItem";
import Image from "next/image";

export default function Home() {
  return (
		<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			<WidgetItem />
		</div>
	);
}
