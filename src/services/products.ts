import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/";

export const getProducts = async () => {
  const response = await axios.get(`${BASE_URL}products`);
  const products = response.data;

  return products;
};