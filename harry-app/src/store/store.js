
import { createStore, combineReducers } from "redux";
import { favoriteReducer } from "../reducers/favoriteReducer";

const reducers = combineReducers({
    favorite: favoriteReducer
})

export const store = createStore(reducers);

//localStorage.setItem("dataFavorite", JSON.stringify(favoriteReducer));
   
 