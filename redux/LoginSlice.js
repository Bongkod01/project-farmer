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




// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     HomePage: ""
// }


// const LoginSlice = createSlice({
//     name: 'welcome',
//     initialState,
//     reducers: {
//         setHomePage: (state, action) => {
//             state.HomePage = action.payload;
//             console.log( 'LoginSlice: ',state.HomePage);
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//     }
// })

// export const {setHomePage} = LoginSlice.actions
// export default LoginSlice.reducer


// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
    phone: '',
    password: '',
    };

    const LoginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            console.log('Slice loginSuccess')
            // console.log('action',action.payload.phone);


            console.log('action',action.payload.Phone);
            console.log('action',action.payload.Password);
            //     action {"Password": "hinina01", "Phone": "0978080000"}
        }
        
    },
    });

export const { loginSuccess, logout } = LoginSlice.actions;
export const selectlogin = (state) => state.login;
export default LoginSlice.reducer;

