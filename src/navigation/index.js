import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseConfigProvider } from 'native-base';
import Login from '../../Screens/Login';
import Welcome from '../../Screens/Welcome';
import Home from '../../Screens/Home';
import Signup from '../../Screens/Signup';
import { Provider } from 'react-redux';
import store from '../../redux/store';

const Stack = createNativeStackNavigator();

export default navigation = () => {

return (
    <Provider store={store}>
        
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false}}>

            <Stack.Screen name ="Welcome" component={Welcome}/>
            <Stack.Screen name ="Login" component={Login} />
            <Stack.Screen name ="Home" component={Home} />
            <Stack.Screen name ="Signup" component={Signup} />
            </Stack.Navigator>
            
        </NavigationContainer>
        
    </Provider>

);

}