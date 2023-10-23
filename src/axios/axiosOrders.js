import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getsOrders = () => {};

export const createOrder = async (order, currentUser) => {
  try {
    const response = await axios.post(`${BASE_URL}orders`, order, {
      headers: { "x-token": currentUser.token },
    });
    return response.data;
    // if (response) {
    // }
  } catch (error) {
    console.log(error);
    alert("Error al crear la orden");
  }
};
