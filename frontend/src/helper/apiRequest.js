import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://realestate-mern-backend.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;
