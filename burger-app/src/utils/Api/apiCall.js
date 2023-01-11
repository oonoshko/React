import axios from "axios";

export const createOrder = async (orderData) =>
  await axios.post("https://burger-api-xcwp.onrender.com/orders", orderData);
