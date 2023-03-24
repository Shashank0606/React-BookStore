import { client } from "./axios";
import { API_ROUTE } from "./config";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const getAllBooks = () => {
  return client.get(API_ROUTE.getAllBooks, headerConfig);
};

export const getById = (id) => {
  return client.get(API_ROUTE.getById + id, headerConfig);
};
