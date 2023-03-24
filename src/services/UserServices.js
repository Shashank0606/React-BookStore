import { client } from "./axios";
import { API_ROUTE } from "./config";

export const registerUser = (data) => {
  return client.post(API_ROUTE.createUser, data);
};

export const loginUser = (data) => {
  return client.post(API_ROUTE.loginUser, data);
};


