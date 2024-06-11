/**
 * Funcion que regresa el arreglo strings para crear los botones de paginacion
 * @param currentPage pagina actual, obtenido de la url
 * @param totalPages total de paginas existentes
 * @returns regresa un array con los numeros de paginacion
 */
export const generatePaginationNumbers = (
	currentPage: number,
	totalPages: number
) => {

  // si el numero total de paginas es 7 o menos, mostramos todas las paginas sin numeros
  if(totalPages <= 7)
    return Array.from({length: totalPages}, (_, i) => i + 1)
    
  // si la pagina actual esta entre las primeras 3 paginas, mostrar ... y las ultimas 2
  if(currentPage <= 2)
    return [1, 2, 3, '...', totalPages - 1, totalPages]


  // si la pagina actual esta entre las ultimas 3 paginas, mostrar ... y las primeras 2
  if(currentPage > totalPages - 2)
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages]

  // si la pagina actual esta en medio, mostrar ... y las 2 paginas anteriores y las 2 siguientes
  return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages]
};


