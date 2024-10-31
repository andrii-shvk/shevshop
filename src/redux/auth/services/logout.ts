import { $api } from "@/api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, { rejectWithValue }) => {
        try {
            await $api.post("/logout");
            localStorage.removeItem("token");
        } catch (error: any) {
            return rejectWithValue(
                error.response?.data?.messsage || "Logout failed"
            );
        }
    }
);
