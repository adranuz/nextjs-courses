import prisma from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
	// borrar data anterior
	// await Promise.all([
		await prisma.productImage.deleteMany()
		await prisma.product.deleteMany()
		await prisma.category.deleteMany()
	// ]);

	// categorias
	const categoriesData = initialData.categories.map((name) => ({ name }));
	await prisma.category.createMany({
		data: categoriesData,
		skipDuplicates: true,
	});

	const categoriesDB = await prisma.category.findMany();
	const categoriesMap = categoriesDB.reduce((acc, category) => {
		acc[category.name] = category.id;
		return acc;
	}, {} as Record<string, string>);

	// products
	initialData.products.forEach(
		async (product) => {
      const {images, type, ...args} = product;
      const productDB = await prisma.product.create({
        data: {
          ...args,
          categoryId: categoriesMap[type],
        }
      })
      await prisma.productImage.createMany({
        data: images.map((image) => ({
          alt: product.title,
          url: image,
          productId: productDB.id,
        }))
      })
    })
}

(() => {
	if (process.env.NODE_ENV === "production") return;
	main();
})();
