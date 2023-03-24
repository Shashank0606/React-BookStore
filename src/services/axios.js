import axios from "axios";

let token = localStorage.getItem("token");
console.log("token", token);

export const client = axios.create({
  baseURL: "http://localhost:6060/api/v1/",
  //   headers: headerConfig,
});

// export const getNotes = async () => {
//     return axios.get(baseUrl + "notes", headerConfig);
//   };
