import { View, Text } from 'react-native'
import React from 'react'

import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice';
import WelcomeSlice from './WelcomeSlice';

const store = configureStore({
  reducer:{
    login: LoginSlice,
    welcome : WelcomeSlice
  }
})

export default store;