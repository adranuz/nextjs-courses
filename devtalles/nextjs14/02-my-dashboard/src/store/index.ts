import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import logger from 'redux-logger'

import { useDispatch, useSelector, useStore } from 'react-redux'
import pokemonsReducer from './pokemons/pokemons'
import { localStorageMiddleware } from './middlewares/localStorage-middleware'

export const store = configureStore({
	reducer: {
		counterReducer,
		pokemons: pokemonsReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // .concat(logger)
		// .concat(localStorageMiddleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()

// export const useAppDispatch = () => AppDispatch = useDispatch
// export const useAppSelector = useSelector.withTypes<RootState>()