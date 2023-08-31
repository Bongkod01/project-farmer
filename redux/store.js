import { View, Text } from 'react-native'
import React from 'react'

import { configureStore } from '@reduxjs/toolkit';
import LoginSlice from './LoginSlice';

const store = configureStore({
  reducer:{
    login: LoginSlice
  }
})

export default store;