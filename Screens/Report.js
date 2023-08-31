import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import ProfileScreen from './Profile';
import Stack from '@mui/material/Stack';

import { Image } from 'react-native';

import COLORS from '../constants/colors';



const Report = () => {
    const [selectedValue, setSelectedValue] = useState('option1');
  
    return (
<View>
    <Picker style={{ backgroundColor: '#cccccc'}}
      selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
       <Picker.Item label="--กรุณาเลือกงวด--" value="option1" />
      <Picker.Item label="งวดที่ 1" value="option2" />
      <Picker.Item label="งวดที่ 2" value="option3" />
      <Picker.Item label="งวดที่ 3" value="option4" />
    </Picker>


   
   
          <View style={styles.box }>
          <Text style={{
            color: "#ffffff",
          }}>จำนวนบิล: --</Text>
          </View>

      <View style={styles.box}>
          <Text style={{
            color: "#ffffff",
          }}> น้ำหนัก: --</Text>
      </View>

      <View style={styles.box}>
          <Text style={{
            color: "#ffffff",
          }}>CCS สะสม: --</Text>
      </View> 
      <View style={styles.boxx}>
          <Text style={{
            color: "#ffffff",
          }}>CCS เฉลี่ย: --</Text>
      </View> 
      <View style={styles.boxx}>
          <Text style={{
            color: "#ffffff",
          }}>น้ำมัน: --</Text>
      </View> 
      <View style={styles.boxx}>
          <Text style={{
            color: "#ffffff",
          }}>นน.สะสม: --</Text>
      </View> 
    </View> 
    )}

   

    


   const styles = StyleSheet.create({
      picker: {
        width: 200,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
      },
      box: {
        marginHorizontal: 10,
        width: 160,
       
       marginVertical: 10,
        height: 50,
       borderRadius: 5,
       backgroundColor: '#007260',
        marginBottom: 10,
       alignItems: 'center',
       justifyContent: 'center'
      },
       boxx: {
        marginHorizontal: 10,
        width: 160,
       marginVertical: 10,
        height: 50,
      
       borderRadius: 5,
       backgroundColor: '#727272',
        marginBottom: 10,
       alignItems: 'center',
       justifyContent: 'center'
       },
      
        
   });
  

 export default Report