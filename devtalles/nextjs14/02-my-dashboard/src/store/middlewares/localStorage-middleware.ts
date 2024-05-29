import { Action, Dispatch, Middleware } from "@reduxjs/toolkit";

import { RootState } from "..";

export const localStorageMiddleware: Middleware = (store) => {

  return (next) => (action) => {
    // ejecuta el action
    const result = next(action);

    // estrae el type del action
    const { type } = action as Action;
    
    // si es tipo pokemon toggle, sobreescribe el localStorage
    if (type === "pokemons/toggleFavorite") {
      const { pokemons } = store.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      return;
    }

    // retorna el resultado de la accion
    return result;

  };

};