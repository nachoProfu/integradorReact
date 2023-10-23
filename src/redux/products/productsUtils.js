import { setProducts } from "./productsSlice";
import { store } from "../store";
import { BASE_URL } from "../../utils/constants";

export const fetchProducts = async (dispatch) => {
  try {
    const response = await fetch(`${BASE_URL}products`);

    const data = await response.json();

    const dataAgrupada = data.products.reduce((acc, product) => {
      if (!acc[product.categoria]) {
        acc[product.categoria] = [];
      }

      acc[product.categoria] = [...acc[product.categoria], product];

      return acc;
    }, {});

    //console.log("Datos de funcion fech:" + dataAgrupada);
    store.dispatch(setProducts(dataAgrupada));
    //return dataAgrupada;
  } catch (error) {
    console.log(`Se produjo el error: ${error}`);
  }
};
