import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const getCategoryApi = createApi({
    reducerPath: 'getCategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_KEY}),
    endpoints: (builder) => ({
        getCategory: builder.query({
            query: () => import.meta.env.VITE_ENDPOINT_ALL_CATEGORY,
        }),
    }),
});

export const { useGetCategoryQuery } = getCategoryApi;
