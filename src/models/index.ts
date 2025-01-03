export interface IProduct {
    id: string;
    title: string;
    price: number;
    description?: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

export type IClientProduct = IProduct & {
    quantity: number;
}

export interface IUser {
    email: string;
    isActivated: boolean;
    id: string;
}