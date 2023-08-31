import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    model_UserInfo: ""
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
    }
})

export default loginSlice.reducer