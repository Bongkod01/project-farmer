
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     home_name: ""
// }

// const HomeSlice = createSlice({
//     name: 'home',
//     initialState,
//     reducers: {
//         setHome_Name: (state,action) => {
//         state.home_name = action.payload
//             console.log( action.payload)
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//     }
// })

// export const {setHome_Name} = HomeSlice.actions
// export default HomeSlice.reducer

// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const HomeSlice = createSlice({
    name: 'home',
    initialState: [],
    reducers: {
        setUser: (state, action) => {
        state.home_name = action.payload
        return action.payload;
        },
    },
    });

export const { setHome } = HomeSlice.actions;
export const selectHome = (state) => state.User;

export default HomeSlice.reducer;
