

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appName: 'Hi',
    username: null,
    password: null
}

const WelcomeSlice = createSlice({
    name: 'welcome',
    initialState,
    reducers: {
        setAppName: (state, action) => {
            state.appName = action.payload;
            console.log(state.appName);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})
export const {setAppName} = WelcomeSlice.actions
export default WelcomeSlice.reducer