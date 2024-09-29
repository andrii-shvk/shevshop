export interface IProduct {
    id: string;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}
export interface IBannerGoods {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
}