import prisma from "@/lib/prisma";

export const getProduct = async (slug: string) => {
	try {
		// 1. obtener los productos de la pagina actual
		const product = await prisma.product.findFirst({
			where: {
				slug,
			},
			include: {
				ProductImage: {
					select: {
						url: true,
					},
				},
			},
		});

		if (!product) throw new Error("Product not found");

		const { ProductImage, ...rest } = product;
		return {
			...rest,
			images: ProductImage.map((image) => image.url),
		};
	} catch (err) {
		throw new Error("Problem with the database connection");
	}
};
