import { createSlice } from '@reduxjs/toolkit'
import {initialStateUser} from "../user/userSlice.js";

const initialState = {
    quiz: {
        amount: '',
        category: '',
        difficulty: '',
        token: initialStateUser.userToken
    }
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
        getQuiz: (state, action) => {
            state.quiz = { ...state.quiz, ...action.payload }
        }
    },
})

// Action creators are generated for each case reducer function
export const { getQuiz } = quizSlice.actions

export default quizSlice.reducer