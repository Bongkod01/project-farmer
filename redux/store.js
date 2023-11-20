import { View, Text } from 'react-native'
import React from 'react'


import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice';
import WelcomeSlice from './WelcomeSlice';
import ProfileSlice from './ProfileSlice';
import ReportSlice from './ReportSlice';
import HomeSlice from './HomeSlice';
import SignupSlice from './SignupSlice';
import DailyCaneSlice from './DailyCaneSlice';

const store = configureStore({
  reducer:{
    login: LoginSlice,
    welcome : WelcomeSlice,
    profile : ProfileSlice,
    report : ReportSlice,
    home : HomeSlice,
    signup : SignupSlice,
    daily : DailyCaneSlice
  }
})

export default store;