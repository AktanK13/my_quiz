import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const createUserApi = createApi({
    reducerPath: 'createUserApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_TOKEN }),
    endpoints: (builder) => ({
        getUserToken: builder.query({
            query: () => import.meta.env.VITE_ENDPOINT_REQUEST_TOKEN,
        }),
    }),
});

export const { useGetUserTokenQuery } = createUserApi;
