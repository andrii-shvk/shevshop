import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchClothingItem } from "../services/fetchClothingItem";
import { IClientProduct } from "@/models";

interface IClothingItemSlice {
    clothingItem: IClientProduct;
    isLoading: boolean;
    error: string | null;
}

const defaultItem: IClientProduct = {
    id: "",
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
        rate: 0,
        count: 0,
    },
    quantity: 0,
};

const initialState: IClothingItemSlice = {
    clothingItem: defaultItem,
    isLoading: false,
    error: "",
};

export const clothingItemSlice = createSlice({
    name: "clothingItem",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchClothingItem.pending.type, (state) => {
            state.error = null;
            state.isLoading = true;
        });
        builder.addCase(
            fetchClothingItem.fulfilled.type,
            (state, action: PayloadAction<IClientProduct>) => {
                state.isLoading = false;
                state.clothingItem = action.payload;
            }
        );
        builder.addCase(
            fetchClothingItem.rejected.type,
            (state, action: PayloadAction<string>) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

export const { actions: clothingItemActions } = clothingItemSlice;
export const { reducer: clothingItemReducer } = clothingItemSlice;
