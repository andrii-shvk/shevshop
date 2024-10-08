import { IClientProduct } from "@/models";

export const calcTotalPrice = (arr: IClientProduct[]) => {
    return arr.reduce((total, item) => total + item.price * item.quantity, 0) || 0;
};