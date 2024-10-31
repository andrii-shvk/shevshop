import axios, { InternalAxiosRequestConfig } from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: String(import.meta.env.VITE_API_URL),
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

export { $api };
