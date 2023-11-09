
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ReportPage: ""
}

const ReportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        ReportPage: (state, action) => {
            state.ReportPage = action.payload;
            console.log( action.payload)
            console.log( 'LoginSlice: ',state.ReportPage);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setReportPage} = ReportSlice.actions
export default ReportSlice.reducer