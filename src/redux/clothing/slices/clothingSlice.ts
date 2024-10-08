import { IProduct } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchAllClothing } from "../services/fetchAllClothing";

export interface IClothingState {
    clothings: IProduct[];
    isLoading: boolean;
    error: string;
    page: number;
    limit: number;
}

const initialState: IClothingState = {
    clothings: [],
    isLoading: false,
    error: "",
    page: 0,
    limit: 4,
};

export const clothingSlice = createSlice({
    name: "clothing",
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllClothing.pending.type, (state) => {
            state.isLoading = true;
        });
        builder.addCase(
            fetchAllClothing.fulfilled.type,
            (state, action: PayloadAction<IProduct[]>) => {
                state.isLoading = false;
                state.clothings = [...state.clothings, ...action.payload];
            }
        );
        builder.addCase(
            fetchAllClothing.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

export const { actions: clothingActions } = clothingSlice;
export const { reducer: clothingReducer } = clothingSlice;
