import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice";
import {createUserApi} from "../services/createUserApi.js";
import {getCategoryApi} from "../services/getCategoryApi.js";
import {createQuizApi} from "../services/createQuizApi.js";
import quizReducer from "./features/quiz/quizSlice.js";

export const store = configureStore({
    reducer: {
        user: userReducer,
        quiz: quizReducer,
        [createUserApi.reducerPath]: createUserApi.reducer,
        [getCategoryApi.reducerPath]: getCategoryApi.reducer,
        [createQuizApi.reducerPath]: createQuizApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createUserApi.middleware, getCategoryApi.middleware, createQuizApi.middleware),
})