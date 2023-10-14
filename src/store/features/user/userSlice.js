import { createSlice } from '@reduxjs/toolkit'

export const initialStateUser = {
    userName: '',
    userToken: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialStateUser,
    reducers: {
        createUser: (state, action) => {
            state.userName = action.payload
        },
        createToken: (state, action) => {
            state.userToken = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { createUser, createToken } = userSlice.actions

export default userSlice.reducer