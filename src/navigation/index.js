import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseConfigProvider } from 'native-base';
import Login from '../../Screens/Login';
import Welcome from '../../Screens/Welcome';
import HomeScreen from '../../Screens/Home';
import Signup from '../../Screens/Signup';
import Profile from '../../Screens/Profile';
import Report from '../../Screens/Report';
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
            <Stack.Screen name ="Home" component={HomeScreen} />
            <Stack.Screen name ="Signup" component={Signup} />
            <Stack.Screen name ="Profile" component={Profile} />
            <Stack.Screen name ="Report" component={Report} />
            </Stack.Navigator>
            
        </NavigationContainer>
        
    </Provider>

);

}