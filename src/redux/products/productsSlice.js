import { createSlice } from "@reduxjs/toolkit";
import { datosProductos } from "../../data/Products";
import { products } from "../../data/Products";

const INITIAL_STATE = {
  products: products,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
