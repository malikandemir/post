import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance =  axios.create({
    baseURL: "https://g1uv1ser4g.execute-api.us-west-1.amazonaws.com/dev",
    headers: {
        "Content-type": "application/json",
        "x-api-key": "b8krXzbpdLbbA3SlWvldanNEslAMp6e2u3z3K1hh"
    },
});

export default apiClient;