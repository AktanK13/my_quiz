import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from "./features/user/userSlice";
import {createUserApi} from "../services/createUserApi.js";
import {getCategoryApi} from "../services/getCategoryApi.js";
import {createQuizApi} from "../services/createQuizApi.js";
import quizReducer from "./features/quiz/quizSlice.js";

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    user: userReducer,
    quiz: quizReducer,
    [createUserApi.reducerPath]: createUserApi.reducer,
    [getCategoryApi.reducerPath]: getCategoryApi.reducer,
    [createQuizApi.reducerPath]: createQuizApi.reducer,
})

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(createUserApi.middleware, getCategoryApi.middleware, createQuizApi.middleware),
})

export const persistor = persistStore(store)
export default store