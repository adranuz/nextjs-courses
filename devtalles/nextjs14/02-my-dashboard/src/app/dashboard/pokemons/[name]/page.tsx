import { PokemonResponse, PokemonsResponse } from "@/pokemons";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Props {
	params: { name: string };
}

// funcion para generar las 151 rutas de los pokemons
// esto solo se va a ejecutar en build time
export async function generateStaticParams() {
  // return array with 151 pokemon names
  const data:PokemonsResponse = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
  .then((data) => data.json())
  return data.results.map((pokemon: any) => ({ name: pokemon.name }));

  // return array with 151 pokemon ids
  // const static151Pokemons = Array.from({ length: 151 }, (_, i) => i + 1);
  // return static151Pokemons.map((id) => ({ id: id.toString() }));

  // return [
  //   { id: "1" },
  //   { id: "2" },
  //   { id: "3" },
  //   { id: "4" },
  //   { id: "5" },
  //   { id: "6" },
  // ]
}

// metadata generada por el request
export async function generateMetadata({ params }: Props): Promise<Metadata> {
	try {
		const pokemon = await getPokemon(params.name);
		return {
			title: `Pokemon #${pokemon.id} - ${pokemon.name.toUpperCase()}`,
			description: "Pokemon description",
		};
	} catch (error) {
    return {
      title: `Pokemon`,
      description: "Pokemon description",
    }
  }
}

// si la request falla podemos llamar a notfound para mostrar una pagina 404
const getPokemon = async (name: string): Promise<PokemonResponse> => {
  try {
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
      cache: "force-cache",
      // next: { revalidate: 60*60*30*6 }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    notFound()
  }
};

export default async function PokemonPage({ params }: Props) {
	const pokemon = await getPokemon(params.name);

	return (
		<div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">
			<div className="mt-2 mb-8 w-full">
				<h1 className="px-2 text-xl font-bold text-slate-700 capitalize">
					#{pokemon.id} {pokemon.name}
				</h1>
				<div className="flex flex-col justify-center items-center">
					<Image
						src={pokemon.sprites.other?.dream_world.front_default ?? ""}
						width={150}
						height={150}
						alt={`Imagen del pokemon ${pokemon.name}`}
						className="mb-5"
					/>

					<div className="flex flex-wrap">
						{pokemon.moves.map((move) => (
							<p key={move.move.name} className="mr-2 capitalize">
								{move.move.name}
							</p>
						))}
					</div>
				</div>
			</div>
			<div className="grid grid-cols-2 gap-4 px-2 w-full">
				<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
					<p className="text-sm text-gray-600">Types</p>
					<div className="text-base font-medium text-navy-700 flex">
						{pokemon.types.map((type) => (
							<p key={type.slot} className="mr-2 capitalize">
								{type.type.name}
							</p>
						))}
					</div>
				</div>

				<div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
					<p className="text-sm text-gray-600">Peso</p>
					<span className="text-base font-medium text-navy-700 flex">
						{pokemon.weight}
					</span>
				</div>

				<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
					<p className="text-sm text-gray-600">Regular Sprites</p>
					<div className="flex justify-center">
						<Image
							src={pokemon.sprites.front_default}
							width={100}
							height={100}
							alt={`sprite ${pokemon.name}`}
						/>

						<Image
							src={pokemon.sprites.back_default}
							width={100}
							height={100}
							alt={`sprite ${pokemon.name}`}
						/>
					</div>
				</div>

				<div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
					<p className="text-sm text-gray-600">Shiny Sprites</p>
					<div className="flex justify-center">
						<Image
							src={pokemon.sprites.front_shiny}
							width={100}
							height={100}
							alt={`sprite ${pokemon.name}`}
						/>

						<Image
							src={pokemon.sprites.back_shiny}
							width={100}
							height={100}
							alt={`sprite ${pokemon.name}`}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
