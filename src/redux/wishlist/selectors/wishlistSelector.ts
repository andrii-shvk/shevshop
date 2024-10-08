import { RootState } from "@/redux/store";

export const getWishItems = (state: RootState) => state.wishlist.wishItems;
