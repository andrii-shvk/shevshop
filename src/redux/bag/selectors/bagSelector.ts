import { RootState } from "@/redux/store";

export const getBagItems = (state: RootState) => state.bag.bagItems;
