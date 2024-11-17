import axios from "axios";

export const getProducts = async () =>
  axios.get("https://api.escuelajs.co/api/v1/products");
