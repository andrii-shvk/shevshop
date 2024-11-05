import { AuthResponse } from "@/models/response/authResponse";
import axios, { InternalAxiosRequestConfig } from "axios";

const $api = axios.create({
    withCredentials: true,
    baseURL: String(import.meta.env.VITE_API_URL),
});

$api.interceptors.request.use((config: InternalAxiosRequestConfig<any>) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

$api.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status == 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest.isRetry = true;
            try {
                const response = await $api.get<AuthResponse>("/refresh", {
                    withCredentials: true,
                });
                localStorage.setItem("token", response.data.accessToken);
                return $api.request(originalRequest);
            } catch (e) {
                console.log("User is not authorized");
            }
        }
        throw error;
    }
);

export { $api };
