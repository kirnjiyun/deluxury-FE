import axios from "axios";

// 환경 변수 설정
const LOCAL_BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
const PROD_BACKEND = process.env.REACT_APP_PROD_BACKEND;
const BACKEND_PROXY = process.env.REACT_APP_BACKEND_PROXY;

const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction
    ? process.env.REACT_APP_PROD_BACKEND
    : process.env.REACT_APP_LOCAL_BACKEND;

console.log("현재 환경:", process.env.NODE_ENV);
console.log("API Base URL:", baseURL);

const api = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + sessionStorage.getItem("token"),
    },
});

api.interceptors.request.use(
    (request) => {
        const token = sessionStorage.getItem("token");
        if (token) {
            request.headers.authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        console.log("REQUEST ERROR", error);
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const errorResponse = error.response
            ? error.response.data
            : error.message;
        console.log("RESPONSE ERROR", errorResponse);
        return Promise.reject(errorResponse);
    }
);

export default api;
