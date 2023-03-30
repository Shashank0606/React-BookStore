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

export const lowToHigh = (id) => {
  return client.get(API_ROUTE.lowToHigh, headerConfig);
};

export const highToLow = (id) => {
  return client.get(API_ROUTE.highToLow, headerConfig);
};

export const searchText = (searchText) => {
  return client.get(API_ROUTE.searchBook + searchText, headerConfig);
};

export const newArrival = () => {
  return client.get(API_ROUTE.newArrival, headerConfig);
};
