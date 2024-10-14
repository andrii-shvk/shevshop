import { IClientProduct } from "@/models";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface FetchClothingItemParams {
    category: string;
    id: string;
}

export const fetchClothingItem = createAsyncThunk<
    IClientProduct,
    FetchClothingItemParams
>("clothingItem/fetchClothingItem", async (params, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    const { category, id } = params;
    try {
        const response = await axios.get<IClientProduct>(
            `${import.meta.env.VITE_MAIN_URL}/${category}/${id}`
        );
        return response.data;
    } catch (error) {
        return rejectWithValue(
            "Sorry... Can not find the data from this resource!"
        );
    }
});
