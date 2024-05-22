"use client";
import { useState } from "react";
import Image from "next/image";
import { PLACEHOLDER_IMAGE } from "../../shared/placeholderimage";

export const Description = () => {
	const [showImage, setShowImage] = useState(false);
  const handleClick = () => setShowImage(!showImage);
	return (
		<section className="max-w-screen-lg grid grid-cols-2">
			<button onClick={handleClick} className="bg-white rounded-lg hover:bg-pink p-[1px] drop-shadow shadow-md dark:shadow-white">
				<div className="h-80 w-auto relative rounded-lg">
					<Image
						src="/images/description.jpeg"
						priority={false}
						alt="Products marketplace"
						fill
						className="absolute rounded-lg object-cover"
						placeholder="blur"
						blurDataURL={PLACEHOLDER_IMAGE}
					/>
				</div>
			</button>
			<div className="pl-4">
				<h2 className="text-3xl font-bold">Bring the future today</h2>
				<p className="text-2xl">
					Future World: Your Gateway to Tomorrow&apos;s Tech! Dive into a world
					of cutting-edge gadgets and gear. Stay ahead of the curve and redefine
					your digital lifestyle with us.
				</p>
			</div>
		</section>
	);
};
