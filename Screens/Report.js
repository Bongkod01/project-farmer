import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HStack,Center } from 'native-base';
import { DataTable } from 'react-native-paper';
import axios from 'axios'



const Report = ({ navigation }) => {


  const [report, setReport] = useState({});

  useEffect(()=>{   
    try {

      console.log('LoadReportPage');
      
      const url = 'http://192.168.0.250:5000/report'
      axios.get(url).then((res) => {
        setReport(res.data);
      console.log('axios res -->', res.data)
    })
    } catch (error) {
      console.log(error)
    }
  },[])

  

  
    const [selectedValue, setSelectedValue] = useState('');
  
    return (
<View>
    <Picker style={{ backgroundColor: '#cccccc'}}
      selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}>
      <Picker.Item label="--กรุณาเลือกงวด--" value=""></Picker.Item>
      <Picker.Item label="งวดที่ 1" value="งวดที่ 1" ></Picker.Item>
      <Picker.Item label="งวดที่ 2" value="งวดที่ 2" ></Picker.Item>
      <Picker.Item label="งวดที่ 3" value="งวดที่ 3" ></Picker.Item>
    </Picker>
    {/* <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
        mode="dropdown" // Android only
        style={styles.picker}
      >
        <Picker.Item label="--กรุณาเลือกงวด--" value="" />
        <Picker.Item label="งวดที่ 1" value="งวดที่ 1" />
        <Picker.Item label="งวดที่ 2" value="งวดที่ 2" />
        <Picker.Item label="งวดที่ 3" value="งวดที่ 3" />
      </Picker> */}

      <Text style={{

        paddingTop: 5,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 17

      }}>- {selectedValue} -</Text>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={5}>
        <Center bg="#091E40" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          จำนวลบิล : {report.Bill}

        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          CCS เฉลี่ย : {report.CCSAV}

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#091E40"width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          น้ำหนัก : {report.WeightCane}

        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          น้ำมัน : {report.Oil}

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#091E40"  width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          CCS สะสม : {report.CCSCL}


        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{color: "#FFFFFF"}} shadow={5}>

          นน.สะสม : {report.WeightOil}


        </Center>
      </HStack>


      <DataTable style={styles.container} paddingTop={20} >

        <DataTable.Header style={styles.tableHeader}  alignItems="center" justifyContent={"center"} >

          <DataTable.Title> วันที่ </DataTable.Title>

          <DataTable.Title> จำนวนบิล </DataTable.Title>

        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{report.Date} </DataTable.Cell>
          <DataTable.Cell>{report.Bill} </DataTable.Cell>
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