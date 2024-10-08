import { IClothingState } from "../slices/clothingSlice";

export const getClothing = (state: IClothingState) => state.clothings;
export const getClothingIsLoading = (state: IClothingState) => state.isLoading;
export const getClothingError = (state: IClothingState) => state.error;
export const getClothingPage = (state: IClothingState) => state.page;
export const getClothingLimit = (state: IClothingState) => state.limit;