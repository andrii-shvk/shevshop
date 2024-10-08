import { IClientProduct } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface IWishList {
    wishItems: IClientProduct[];
}

const initialState: IWishList = {
    wishItems: [],
};

export const wishListSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        toggleItemWishList(state, action: PayloadAction<IClientProduct>) {
            const item = state.wishItems.find(
                (el) => el.id === action.payload.id
            );
            if (item) {
                state.wishItems = state.wishItems.filter(
                    (elem) => elem.id !== action.payload.id
                );
            } else {
                state.wishItems.push(action.payload);
            }
        },
    },
});

const persistConfig = {
    key: "wishlist",
    storage,
};

export const persistedWishList = persistReducer(
    persistConfig,
    wishListSlice.reducer
);

export const { toggleItemWishList } = wishListSlice.actions;
