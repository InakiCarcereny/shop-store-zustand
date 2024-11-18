import axios from "axios";

export const getProduct = async (title: string) =>
  axios.get(`https://api.escuelajs.co/api/v1/products/?title=${title}`);

export const getProducts = async () =>
  axios.get("https://api.escuelajs.co/api/v1/products");
