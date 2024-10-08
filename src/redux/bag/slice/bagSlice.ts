import { IClientProduct } from "@/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export interface IBag {
    bagItems: IClientProduct[];
}

const initialState: IBag = {
    bagItems: [],
};

export const bagSlice = createSlice({
    name: "bag",
    initialState,
    reducers: {
        addItemToBag(state, action: PayloadAction<IClientProduct>) {
            const item = state.bagItems.find(
                (el) => el.id === action.payload.id
            );
            if (!item) {
                state.bagItems.push({ ...action.payload, quantity: 1 });
            }
        },
        increaseItem(state, action: PayloadAction<IClientProduct>) {
            const item = state.bagItems.find(
                (el) => el.id === action.payload.id
            );
            if (item) {
                item.quantity += 1;
            } else {
                state.bagItems.push({ ...action.payload, quantity: 1 });
            }
        },
        decreaseItem(state, action: PayloadAction<IClientProduct>) {
            const item = state.bagItems.find(
                (el) => el.id === action.payload.id
            );
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.bagItems = state.bagItems.filter(
                    (elem) => elem.id !== action.payload.id
                );
            }
        },
    },
});

const persistConfig = {
    key: "bag",
    storage,
};

export const persistedBagReducer = persistReducer(
    persistConfig,
    bagSlice.reducer
);

export const { addItemToBag, increaseItem, decreaseItem } = bagSlice.actions;
export const { reducer: bagReducer } = bagSlice;
