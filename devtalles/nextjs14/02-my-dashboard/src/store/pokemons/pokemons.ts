import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
	favorites:  {
		[key: string]: SimplePokemon
	};
}

// const getInitialStateLocalStorage = () => {
// 	if(typeof localStorage === 'undefined') return {}
// 	const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
// 	return favorites
// }

// const initialState: PokemonsState = getInitialStateLocalStorage()
const initialState: PokemonsState = {
	favorites: {}
}


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
		toggleFavorite(state, action:PayloadAction<SimplePokemon>) {
			const pokemon = action.payload;
			if (state.favorites[pokemon.id]) {
				delete state.favorites[pokemon.id];
			} else {
				state.favorites[pokemon.id] = pokemon;
			}
			if(typeof localStorage !== 'undefined') {
				localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites));
			}
		},
		setFavoritePokemons(state, action:PayloadAction<{[key: string]:SimplePokemon}>) {
			state.favorites = action.payload;
		},
	}
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer