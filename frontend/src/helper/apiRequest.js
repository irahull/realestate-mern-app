import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "Enter backend Url Upper",
  withCredentials: true,
});

export default apiRequest;
