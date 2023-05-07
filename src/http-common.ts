import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance =  axios.create({
    baseURL: "https://g1uv1ser4g.execute-api.us-west-1.amazonaws.com/dev",
    headers: {
        "Content-type": "application/json",
        "x-api-key": import.meta.env.VITE_POST_X_API_KEY
    },
});

export default apiClient;