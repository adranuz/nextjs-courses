"use client";
import { generatePaginationNumbers } from "@/utils";
import clsx from "clsx";
import Link from "next/link";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import React from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

interface Props {
	totalPages: number;
}

export const Pagination = ({ totalPages }: Props) => {
	const pathname = usePathname(); // "/shop/"

	// obtiene el parametro page de la url
	const searchParams = useSearchParams();
	const pageString = searchParams.get("page") ?? 1;
	const currentPage = isNaN(+pageString) ? 1 : +pageString; // 1, 2 o 3


	if(currentPage < 1 || isNaN(+pageString)) redirect(`${pathname}`);

	// genera los numeros de la paginacion [1,2,3,4,...,50]
	const paginationButtons = generatePaginationNumbers(currentPage, totalPages);

	// crea la url mediante pageNumber
	const createPageUrl = (pageNumber: number | string) => {
		const params = new URLSearchParams(searchParams);

		// si se presiona los ... manda la misma pagina
		if (pageNumber === "...") return `${pathname}?${params.toString()}`;

		// si la pagina es 0, se manda la url sin el parametro page
		if (+pageNumber <= 0) return `${pathname}`;

		// si la pagina es mayor al total de paginas, se manda la url sin el parametro page
		if (+pageNumber > totalPages) return `${pathname}?${params.toString()}`;

		// el caso por default, setea la nueva pagina en los params y retorna la url
		params.set("page", pageNumber.toString());
		return `${pathname}?${params.toString()}`;
	};

	console.log({ pathname, searchParams, currentPage });
	return (
		<div className="flex justify-center mt-1- mb-32">
			<nav aria-label="Page navigation example">
				<ul className="flex list-style-none">
					<li className="page-item">
						<Link
							className={clsx(
								"page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
								{
									"pointer-events-none": currentPage === 1,
								}
							)}
							href={createPageUrl(currentPage - 1)}
						>
							<IoChevronBackOutline size={30} />
						</Link>
					</li>
					{paginationButtons?.map((button, index) => (
						<li key={index} className="page-item">
							<Link
								className={clsx(
									"page-link relative block py-1.5 px-3 border-0  outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none",
									{
										"bg-blue-600 text-white shadow-ms hover:bg-blue-400 hover:text-white":
											button === currentPage,
									}
								)}
								href={createPageUrl(button)}
							>
								{button}
							</Link>
						</li>
					))}
					<li className="page-item">
						<Link
							className={clsx("page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none", {
								"pointer-events-none disabled": currentPage === totalPages,
							
							})}
							href={createPageUrl(currentPage + 1)}
						>
							<IoChevronForwardOutline size={30} />
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
