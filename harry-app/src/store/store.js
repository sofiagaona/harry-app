
import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { favoriteReducer } from "../reducers/favoriteReducer";

const rootReducer = combineReducers({
    favorite: favoriteReducer
})

const persistedReducer = persistReducer({
  key: 'root',
  storage,
  whitelist: ['favorite']
}, rootReducer)

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);

   
 