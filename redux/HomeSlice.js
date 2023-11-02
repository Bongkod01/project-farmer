

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    home_name: ""
}

const HomeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHome_Name: (state,action) => {
        state.home_name = action.payload
            console.log( action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setHome_Name} = HomeSlice.actions
export default HomeSlice.reducer