import axios from "axios";
import { serverBaseUrl } from "./constants";

const axiosInstance = axios.create({
  baseURL: serverBaseUrl,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
