"use client"
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '.'
import { setFavoritePokemons } from './pokemons/pokemons'
interface Props {
  children: React.ReactNode
}


export const Providers = ({children}: Props) => {
  // poblar favorites con los datos en localStorage
  useEffect(()=> {
	const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    store.dispatch(setFavoritePokemons(favorites))
  }, [])

  // provider
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
