import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/lib/persistStore";

import cartReducer from "./cart/cartSlice";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import hamburReducer from "./hambur/hamburSlice";

const reducer = combineReducers({
  cart: cartReducer,
  categories: categoriesReducer,
  products: productsReducer,
  toggleHambur: hamburReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
