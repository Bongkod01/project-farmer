import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './Profile';
import { VStack,Spacer , Center, NativeBaseConfigProvider } from "native-base";
import { Image } from 'react-native';

import COLORS from '../constants/colors';


const Profile = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image source={require("../assets/Farmer3.png")}
          style={{
            flex: 1,
            height: 100,
            width: 100,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 20,
            position: "absolute",
            top: 20
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          top: 130
        }}
        >นายใจดี มีสุข</Text>
        <Text style={{
          top: 140,
        }}>เลขประจำตัวชาวไร่ 123456789</Text>
      </View>

      <View style={styles.container}>
          <View style={styles.row}>
            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 98,
              fontWeight: 'bold'}}>ชื่อ</Text>

            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 90,
              color: '#868080',
              fontWeight: 'bold'}}>นายใจดี มีสุข </Text>
          </View>

          <View style={styles.row}>
             <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 50,
              fontWeight: 'bold'}}>Email</Text>

            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 40,
              color: '#868080',
              fontWeight: 'bold'}}>FarmerApp@gmail.com</Text>
          </View>

          <View style={styles.row}>
             <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 50,
              fontWeight: 'bold'}}>เบอร์โทรศัพท์</Text>
              
            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 50,
              color: '#868080',
              fontWeight: 'bold'}}> 091-234-5678</Text>
          </View>

          <View style={styles.row}>
             <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 60,
              fontWeight: 'bold'}}>ที่อยู่</Text>

            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 52,
              color: '#868080',
              fontWeight: 'bold'}}>99/9, กรุงเทพมหานคร</Text>
          </View>


          <View style={styles.row}>
            <Pressable 
            onPress={()=>navigation.navigate("Login")}>
            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              marginHorizontal: 20,
              color: "#f00",
              fontWeight: 'bold'}}>ออกจากระบบ</Text>
            </Pressable>
          </View>
          </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 2,
      backgroundColor: '',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 5,
      marginHorizontal: 15,
      borderColor: '#007260',
      borderRadius: 20,
      borderWidth: 1 
    },
    row: {
      flexDirection: 'row',
      backgroundColor: ''
      
    },

  })
export default Profile
