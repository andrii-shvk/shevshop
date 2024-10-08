import { rtkApi } from "@/api/rtkApi";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import { clothingReducer } from "./clothing/slices/clothingSlice";
import { persistedWishList } from "./wishlist/slice/wishlistSlice";
import { persistedBagReducer } from "./bag/slice/bagSlice";

export const rootReducer = combineReducers({
    clothings: clothingReducer,
    wishlist: persistedWishList,
    bag: persistedBagReducer,
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
