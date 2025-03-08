import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "http://chat-application-6wxf.onrender.com/api",
  withCredentials: true,
});
