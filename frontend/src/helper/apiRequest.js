import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:4000/api",
  // baseURL: "https://realestate-mern-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
