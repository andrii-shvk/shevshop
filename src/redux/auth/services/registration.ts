import { $api } from "@/api/api";
import { LoginFormInputs } from "@/hooks/useAuth";
import { AuthResponse } from "@/models/response/authResponse";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registration = createAsyncThunk(
    "auth/registration",
    async (data: LoginFormInputs, { rejectWithValue }) => {
        try {
            const response = await $api.post<AuthResponse>(
                "/registration",
                data
            );
            localStorage.setItem("token", response.data.accessToken);
            return response.data.accessToken;
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.message || "Error with validation"
            );
        }
    }
);
