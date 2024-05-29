'use client'
import Link from 'next/link'
import React from 'react'
import { SimplePokemon } from '../interfaces/simple-pokemon'
import Image from 'next/image'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'
import { useAppDispatch, useAppSelector } from '@/store'
import { toggleFavorite } from '@/store/pokemons/pokemons'

interface Props {
  pokemon: SimplePokemon
}

export const PokemonCard = ({pokemon}: Props) => {
	// is in favorite list?
	const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[pokemon.id]);
	const dispatch = useAppDispatch();
	const onToggleFavorite = () => {dispatch(toggleFavorite(pokemon))}
	
  return (
		<div className="bg-blue-300 mx-auto right-0 mt-2 w-60">
			<div className="bg-white rounded overflow-hidden shadow-lg">
				<div className="flex flex-col justify-center items-center text-center p-6 bg-gray-800 border-b">
					<Image
						src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
						width={100}
						height={100}
						alt="pokemon image"
            priority={false}
					/>
					<p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
						{pokemon.name}
					</p>
					<div className="mt-5">
						{/* <Link href={`/dashboard/pokemon/${pokemon.id}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
							Mas informacion
						</Link> */}
						<Link href={`/dashboard/pokemons/${pokemon.name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
							Mas informacion
						</Link>
					</div>
				</div>
				<div className="border-b">
					<div className='cursor-pointer' onClick={onToggleFavorite}>
						<div className="px-4 py-2 hover:bg-gray-100 flex">
							<div className="text-red-600">
								{!isFavorite ? (
									<IoHeartOutline size={20} />
								) : (
									<IoHeart size={20} />
								)}
							</div>
							<div className="pl-3">
								<p className="text-sm font-medium text-gray-800 leading-none">
									No es favorito
								</p>
								<p className="text-xs text-gray-500">View your campaigns</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
