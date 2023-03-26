import { client } from "./axios";
import { API_ROUTE } from "./config";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const addedToCart = (id) => {
  return client.post(API_ROUTE.addedToCart + id, {}, headerConfig);
};

export const removeFromCart = (id) => {
  return client.put(API_ROUTE.removeFromCart + id, headerConfig);
};
