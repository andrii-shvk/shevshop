import { $api } from "@/api/api";
import { AuthResponse } from "@/models/response/authResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const checkAuth = createAsyncThunk(
    "auth/checkAuth",
    async (_, { rejectWithValue }) => {
        try {
            const response = await $api.get<AuthResponse>("/refresh", {
                withCredentials: true,
            });
            localStorage.setItem("token", response.data.accessToken);
        } catch (error: any) {
            return rejectWithValue(
                error?.response?.data?.message || "User is not authorized"
            );
        }
    }
);
