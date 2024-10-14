import { IClientProduct } from "@/models";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApi = createApi({
    reducerPath: "goodsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
    tagTypes: ["Goods"],
    endpoints: (builder) => ({
        getManClothing: builder.query<IClientProduct[], void>({
            query: () => ({
                url: `/man-clothing`,
            }),
            providesTags: () => ["Goods"],
        }),
        getWomanClothing: builder.query<IClientProduct[], void>({
            query: () => ({
                url: `/woman-clothing`,
            }),
            providesTags: () => ["Goods"],
        }),
        getAllJewelery: builder.query<IClientProduct[], void>({
            query: () => ({
                url: `/jewelery`,
            }),
            providesTags: () => ["Goods"],
        }),
        getBannerGoods: builder.query<IClientProduct[], void>({
            query: () => ({
                url: `/banner`,
            }),
            providesTags: () => ["Goods"],
        }),
    }),
});

export const {
    useGetBannerGoodsQuery,
    useGetManClothingQuery,
    useGetAllJeweleryQuery,
    useGetWomanClothingQuery
} = rtkApi;
