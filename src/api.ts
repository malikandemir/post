import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'b8krXzbpdLbbA3SlWvldanNEslAMp6e2u3z3K1hh'
    },
    transformRequest: [
        (data) => {
            return JSON.stringify(data);
        },
    ],
    transformResponse: [
        (data) => {
            return JSON.parse(data);
        },
    ],
});

// import store from '../store'

// const listener = () => {
//     const token = store.getState().token
//     api.defaults.headers.common['Authorization'] = token;
// }
//
// store.subscribe(listener)

export default api;