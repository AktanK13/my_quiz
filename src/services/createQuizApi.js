import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const createQuizApi = createApi({
    reducerPath: 'createQuizApi',
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_API_DEFAULT}),
    endpoints: (builder) => ({
        getQuiz: builder.query({
            query: (params) => {
                console.log(params)
                const {amount, category,difficulty, token} = params
                return `?${import.meta.env.VITE_ENDPOINT_AMOUNT}${amount}&${import.meta.env.VITE_ENDPOINT_CATEGORY}${category}&${import.meta.env.VITE_ENDPOINT_DIFFICULTY}${difficulty}&${import.meta.env.VITE_ENDPOINT_TOKEN}${token}`
            }
        }),
    }),
});

export const {useGetQuizQuery} = createQuizApi;
