import { RootState } from "@/redux/store";

export const getClothingItem = (state: RootState) => state.clothingItem.clothingItem;
export const getClothingItemLoading = (state: RootState) => state.clothingItem.isLoading;
export const getClothingItemError = (state: RootState) => state.clothingItem.error;