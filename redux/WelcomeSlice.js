
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    AppName: '',
    username: null,
    password: null
}

const WelcomeSlice = createSlice({
    name: 'welcome',
    initialState,
    reducers: {
        setAppName: (state, action) => {
            state.AppName = action.payload;
            console.log( 'WelcomeSlice: ',state.AppName);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})
export const {setAppName} = WelcomeSlice.actions
export default WelcomeSlice.reducer