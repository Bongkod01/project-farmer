
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    ProfilePage: ""
}

const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfilePage: (state,action) => {
            state.ProfilePage = action.payload;
            console.log( action.payload)
            console.log( 'ProfileSlice: ',state.ProfilePage);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setProfilePage} = ProfileSlice.actions
export default ProfileSlice.reducer