import { createSlice } from "@reduxjs/toolkit";
import { login } from "../services/login";
import { registration } from "../services/registration";
import { logout } from "../services/logout";
import { checkAuth } from "../services/checkAuth";

interface AuthState {
    isAuthenticated: boolean;
    isLoading: boolean;
    incorrectData: string;
    checkAuthLoading: boolean;
}

const initialState: AuthState = {
    isAuthenticated: false,
    isLoading: false,
    incorrectData: "",
    checkAuthLoading: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
            state.incorrectData = "";
        });
        builder.addCase(login.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.incorrectData = action.payload as string;
        });
        builder.addCase(registration.pending, (state) => {
            state.isLoading = true;
            state.incorrectData = "";
        });
        builder.addCase(registration.fulfilled, (state) => {
            state.isLoading = false;
            state.isAuthenticated = true;
        });
        builder.addCase(registration.rejected, (state, action) => {
            state.isLoading = false;
            state.incorrectData = action.payload as string;
        });
        builder.addCase(logout.fulfilled, (state) => {
            state.isAuthenticated = false;
        });
        builder.addCase(checkAuth.pending, (state) => {
            state.checkAuthLoading = true;
        });
        builder.addCase(checkAuth.fulfilled, (state) => {
            state.isAuthenticated = true;
            state.checkAuthLoading = false;
        });
        builder.addCase(checkAuth.rejected, (state, action) => {
            state.incorrectData = action.payload as string;
        });
    },
});

export const { reducer: authReducer } = authSlice;
