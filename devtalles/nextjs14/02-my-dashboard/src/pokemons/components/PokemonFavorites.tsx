'use client'
import { useAppSelector } from '@/store';
import React, { useEffect } from 'react'
import { PokemonGrid } from './PokemonGrid';
import { IoHeartOutline } from 'react-icons/io5';

export const PokemonFavorites = () => {
  const pokemons = useAppSelector((state) => Object.values(state.pokemons.favorites));
  const [favorites, setFavorites] = React.useState(pokemons);

  useEffect(() => {
    setFavorites(pokemons);
  }, [pokemons])

  return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<h1>Favorite Pokemons</h1>
			{!favorites.length ? (
				<NotFavorites />
			) : (
				<PokemonGrid pokemons={favorites} />
			)}
		</div>
	);
}

export const NotFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={70} className="text-red-500" />
      <h1>No tienes favoritos</h1>
    </div>
  )
}