import { IBannerGoods, IClientProduct } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
    reducerPath: "goodsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    tagTypes: ["Goods"],
    endpoints: (builder) => ({
        getAllClothing: builder.query<IClientProduct[], number>({
            query: () => ({
                url: `/clothing`,
            }),
            providesTags: () => ["Goods"],
        }),
        getAllJewelery: builder.query<IClientProduct[], number>({
            query: () => ({
                url: `/jewelery`,
            }),
            providesTags: () => ["Goods"],
        }),
        getBannerGoods: builder.query<IBannerGoods[], number>({
            query: () => ({
                url: `/banner`,
            }),
            providesTags: () => ["Goods"],
        }),
    }),
});

export const { useGetAllClothingQuery } = rtkApi;
export const { useGetAllJeweleryQuery } = rtkApi;
export const { useGetBannerGoodsQuery } = rtkApi;
