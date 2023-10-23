import { createSlice } from "@reduxjs/toolkit";
import { datosProductos } from "../../data/Products";
import { products } from "../../data/Products";
//import { BASE_URL } from "../../utils/constants";

// const fetchProducts = async () => {
//   try {
//     const response = await fetch(`${BASE_URL}products`);

//     const data = await response.json();

//     const dataAgrupada = data.products.reduce((acc, product) => {
//       if (!acc[product.categoria]) {
//         acc[product.categoria] = [];
//       }

//       acc[product.categoria] = [...acc[product.categoria], product];

//       return acc;
//     }, {});

//     //console.log(dataAgrupada);
//     return dataAgrupada;
//   } catch (error) {
//     console.log(`Se produjo el error: ${error}`);
//   }
// };

const INITIAL_STATE = {
  //products: products,
  //products: fetchProducts(),
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {
    getProducts: (state) => {
      return state;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { getProducts, setProducts } = productsSlice.actions;

export default productsSlice.reducer;
