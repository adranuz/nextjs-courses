// 'use client'

import { getCookie, hasCookie, setCookie } from "cookies-next";

/** cookie: cart
 * idDeProducto: cantidad
 * {'uuid-123-1': 1, 'uuid-123-2': 2}
 */

// si existe la cookie cart, la retorna, sino retorna un objeto vacio
export const getCookieCart = ():{[id: string]: number} => {
  if(hasCookie('cart')) {
    const cookie = JSON.parse(getCookie('cart') as string ?? '{}')
    // todo: validar que sea un objeto como el que esperamos key: string, value: number
    return cookie
  }
  return {};
}

// obtiene la cookie cart, si existe el id le agrega uno mas, si no existe lo agrega con valor de 1
export const addProductToCart = (id: string) => {
  const cookieCard = getCookieCart();
  if(cookieCard[id]) {
    cookieCard[id] += 1;
  } else {
    cookieCard[id] = 1;
  }
  setCookie('cart', JSON.stringify(cookieCard))
}

export const removeProductFromCart = (id: string) => {
  const cookieCard = getCookieCart();
  delete cookieCard[id]
  setCookie('cart', JSON.stringify(cookieCard))
}

export const removeSingleProductFromCart = (id: string) => {
  const cookieCard = getCookieCart();
  if(cookieCard[id]) {
    cookieCard[id] -= 1;
    if(cookieCard[id] === 0) {
      delete cookieCard[id]
    }
  }
  setCookie('cart', JSON.stringify(cookieCard))
}
