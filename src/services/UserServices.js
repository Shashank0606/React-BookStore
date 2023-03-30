import { client } from "./axios";
import { API_ROUTE } from "./config";

const headerConfig = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
};

export const registerUser = (data) => {
  return client.post(API_ROUTE.createUser, data);
};

export const loginUser = (data) => {
  return client.post(API_ROUTE.loginUser, data);
};

export const updateAddress = (data) => {
  return client.post(API_ROUTE.updateAddress, data, headerConfig);
};

export const getUserDetails = () => {
  return client.get(API_ROUTE.getUser, headerConfig);
};
