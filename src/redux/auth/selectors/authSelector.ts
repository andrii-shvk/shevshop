import { RootState } from "@/redux/store";

export const isAuthenticated = (state: RootState) => state.auth.isAuthenticated;
export const authIsLoading = (state: RootState) => state.auth.isLoading;
export const authIncorrectData = (state: RootState) => state.auth.incorrectData;
export const checkAuthLoading = (state: RootState) => state.auth.checkAuthLoading;
