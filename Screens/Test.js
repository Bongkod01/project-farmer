import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from './Profile';
import Stack from '@mui/material/Stack';

import { Image } from 'react-native';

import COLORS from '../constants/colors';



    const DogClass_Definition = () => {
        const [dogInfo, setDogInfo] = useState({
          DogName: "Woonsen",
          DogAge: 2,
          DogBreed: "Shiba Inu",
          DogColor: "Orange"
        });
      
    const [showInfo, setShowInfo] = useState(false);
      
        const onClickMe = () => {
          setShowInfo(!showInfo);
        };
      
        return (
          <View>
            <Button color="#000000" title="Click Me!" onPress={onClickMe} />
            {showInfo && (
              <View>
                <Text>Name: {dogInfo.DogName}</Text>
                <Text>Age: {dogInfo.DogAge}</Text>
                <Text>Breed: {dogInfo.DogBreed}</Text>
                <Text>Color: {dogInfo.DogColor}</Text>
              </View>
            )}
          </View>
        );
      };
    


    const Test = () => {
        return (
          <View style={styles.container}>
            <DogClass_Definition />
          </View>
        );
      };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
       
        }
);
      
      

export default Test