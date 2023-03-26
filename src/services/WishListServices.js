import { client } from "./axios";
import { API_ROUTE } from "./config";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const addBookToWishList = (id) => {
  return client.post(API_ROUTE.addToWishList + id, {}, headerConfig);
};

export const removeBookFromWishList = (id) => {
  return client.put(API_ROUTE.removeFromWishlist + id, {}, headerConfig);
};
