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
  return client.put(API_ROUTE.removeFromCart + id, {}, headerConfig);
};

export const decreaseBookQuantity = (id) => {
  return client.post(API_ROUTE.decreaseBookQuantity + id, {}, headerConfig);
};

// export const updateAddress = (data) => {
//   return client.post(API_ROUTE.updateAddress, data, headerConfig);
// };

export const getCart = (data) => {
  return client.get(API_ROUTE.getCart, headerConfig);
};
