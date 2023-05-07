import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance =  axios.create({
    baseURL: import.meta.env.VITE_POST_URL,
    headers: {
        "Content-type": "application/json",
        "x-api-key": import.meta.env.VITE_POST_X_API_KEY
    },
});

export default apiClient;