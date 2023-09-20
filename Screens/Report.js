import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';
import { Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { HStack,Center } from 'native-base';
import ProfileScreen from './Profile';
import Stack from '@mui/material/Stack';
import { VStack } from 'native-base';
import { Image } from 'react-native';
import { DataTable } from 'react-native-paper';
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


      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={5}>
        <Center bg="#007260" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          จำนวลบิล : --

        </Center>
        <Center bg="#39B68D" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          CCS เฉลี่ย : --

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#007260"width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          น้ำหนัก : --

        </Center>
        <Center bg="#39B68D" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          น้ำมัน : --

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#007260"  width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          CCS สะสม : --

        </Center>
        <Center bg="#39B68D" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          นน.สะสม : --

        </Center>
      </HStack>


      <DataTable style={styles.container} paddingTop={20} >

        <DataTable.Header style={styles.tableHeader}  alignItems="center" justifyContent={"center"} >

          <DataTable.Title> วันที่ </DataTable.Title>

          <DataTable.Title> จำนวนบิล </DataTable.Title>

        </DataTable.Header>

        <DataTable.Row>
          {/* <DataTable.Cell> 2 มกราคม 2565 </DataTable.Cell>
          <DataTable.Cell> 25 </DataTable.Cell> */}
        </DataTable.Row>

      <DataTable.Row>
        {/* <DataTable.Cell> 5 พฤษภาคม 2565 </DataTable.Cell>
        <DataTable.Cell> 20 </DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        {/* <DataTable.Cell> 5 พฤษภาคม 2565 </DataTable.Cell>
        <DataTable.Cell> 15 </DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        {/* <DataTable.Cell></DataTable.Cell>
        <DataTable.Cell></DataTable.Cell> */}
      </DataTable.Row>

      <DataTable.Row>
        {/* <DataTable.Cell></DataTable.Cell>
        <DataTable.Cell></DataTable.Cell> */}
      </DataTable.Row>

    </DataTable>


    </View>
)}


          {/* <View style={styles.box }>
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
    </View>  */}
  

   

    


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
        justifyContent: 'center',
       },
      tableHeader: {
        
        backgroundColor: '#cccccc', 
      
        },
        
   });
  

 export default Report