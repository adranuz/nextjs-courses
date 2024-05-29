import { PokemonFavorites } from "@/pokemons/components/PokemonFavorites";


export const metadata = {
 title: 'Pokemones favoritos',
 description: 'Pokemones favoritos',
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <PokemonFavorites />
    </div>
  );
}

