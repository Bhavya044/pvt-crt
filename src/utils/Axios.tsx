import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3000/api", // Set your base URL here
});

export default axiosConfig;
