import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}users/login`, {
      email,
      password,
    });
    //console.log(response);
    return response.data;
  } catch (error) {
    //console.log(error);
    return alert(error.response.data.msg);
  }
};

export const registerUser = async (
  nombre,
  direccion,
  telefono,
  email,
  password
) => {
  try {
    const response = await axios.post(`${BASE_URL}users/register`, {
      nombre,
      direccion,
      telefono,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    //console.log(error);
    return alert(error.response.data[0].msg);
  }
};
