import { rtkApi } from "@/api/rtkApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { persistedWishList } from "./wishlist/slice/wishlistSlice";
import { persistedBagReducer } from "./bag/slice/bagSlice";
import { clothingItemReducer } from "./clothingItem/slice/clothingItemSlice";

export const rootReducer = combineReducers({
    wishlist: persistedWishList,
    bag: persistedBagReducer,
    clothingItem: clothingItemReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleWare) =>
        getDefaultMiddleWare({
            serializableCheck: false,
        }).concat(rtkApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
