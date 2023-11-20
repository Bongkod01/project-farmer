
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    Daily_Cane: ""
}

const DailyCaneSlice = createSlice({
    name: 'dailycane',
    initialState,
    reducers: {
        DailyPage: (state, action) => {
            state.DailyPage = action.payload;
            console.log( action.payload)
            console.log( 'DailyPage: ',state.DailyPage);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setDailyPage} = DailyCaneSlice.actions
export default DailyCaneSlice.reducer