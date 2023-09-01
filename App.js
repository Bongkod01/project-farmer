import { Text, View,StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import _Navigat from '../project-farmer/src/navigation' 


export default  App =() => {
  return (
   <NativeBaseProvider>
    <_Navigat></_Navigat>
    </NativeBaseProvider>
    
  );
};
