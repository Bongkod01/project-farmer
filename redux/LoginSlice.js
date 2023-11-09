// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     model_UserInfo: ""
// }

// const loginSlice = createSlice({
//     name: 'login',
//     initialState,
//     reducers: {
//     },
//     extraReducers: (builder) => {
//         builder
//     }
// })

// export default LoginSlice.reducer




import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    HomePage: ""
}

const LoginSlice = createSlice({
    name: 'welcome',
    initialState,
    reducers: {
        setHomePage: (state, action) => {
            state.HomePage = action.payload;
            console.log( 'LoginSlice: ',state.HomePage);
        }
    },
    extraReducers: (builder) => {
        builder
    }
})

export const {setHome_Name} = LoginSlice.actions
export default LoginSlice.reducer