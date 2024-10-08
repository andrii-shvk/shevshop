import { IProduct } from "@/models";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllClothing = createAsyncThunk(
    "clothing/fetchAllClothing",
    async (_, thunkAPI) => {
        const { getState, rejectWithValue } = thunkAPI;

        try {
            const response = await axios.get<IProduct[]>(
                `${import.meta.env.VITE_MAIN_URL}/clothing`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(
                "Sorry... Could not fetch the data from this resource."
            );
        }
    }
);
