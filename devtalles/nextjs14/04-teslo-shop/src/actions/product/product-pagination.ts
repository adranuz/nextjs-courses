"use server";

import prisma from "@/lib/prisma";
import { Gender } from '@prisma/client';

interface PaginationOptions {
	page?: number;
	take?: number;
	gender?: Gender;
}

export const getPaginatedProductsWithImages = async ({
	page = 1,
	take = 3,
	gender,
}: PaginationOptions) => {
	if (isNaN(Number(page)) || page < 1) page = 1;
	if (isNaN(Number(take)) || page < 1) page = 1;
	try {

    // 1. obtener los productos de la pagina actual
		const products = await prisma.product.findMany({
			take: take,
			skip: (page - 1) * take,
			include: {
				ProductImage: {
					take: 2,
					select: {
						url: true,
					},
				},
			},
			where: {
				gender
			}
		});

    // 2. obtener el total de paginas
    const totalProducts = await prisma.product.count({where: {gender}});
    const totalPages = Math.ceil(totalProducts / take);

    // retornar los productos y la paginacion
		return {
      currentPage: page,
      totalPages,
			products: products.map((product) => {
				const { ProductImage, ...rest } = product;
				return {
					...rest,
					images: ProductImage.map((image) => image.url),
				};
			}),
		};
	} catch (error) {
		throw new Error("Problem with the database connection");
	}
};
