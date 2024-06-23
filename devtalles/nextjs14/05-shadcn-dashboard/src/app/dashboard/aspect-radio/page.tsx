import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Page() {
	return (
		<div>
			<div className="w-[450px]">
				<AspectRatio ratio={16 / 9} className="bg-muted">
					<Image width={500} height={500} src="/images/bread.jpg" alt="Image" className="rounded-md object-cover" />
				</AspectRatio>
			</div>
		</div>
	);
}
