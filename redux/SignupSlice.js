
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    SignupPage: ""
}

const SignupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        setSignupPage: (state,action) => {
            state.SignupPage = action.payload;
            console.log( action.payload)
            console.log( 'SignupSlice: ',state.SignupPage);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setSignupPage} = SignupSlice.actions
export default SignupSlice.reducer