import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, ScrollView,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HStack, Center, FlatList, Box,Select  } from 'native-base';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { Button } from 'react-native';


const Report = ({ navigation,route }) => {

  const [Data_d, setData_d] = useState([]);
  const [user, setUser] = useState([]);

  const [selected, setSelected] = useState("");



  // const No = [
  //   { key: '1', value: 'งวดที่ 1 ' },
  //   { key: '2', value: 'งวดที่ 2 ' }
  // ]
  
    const { info1, info2 } = useSelector((state) => ({
    info1: state.login.phone,
    info2: state.login.password,
  }));
  console.log('phone',info1)
  console.log('password',info2)
    // console.log('phone',info1)
    // console.log('password',info2)

  const [report, setReport] = useState({});

  const [ sumBil, setsumBil ] = useState([]);
  console.log(sumBil)

  const [ sumWeightCane, setsumWeightCane ] = useState([]);
  console.log(sumWeightCane)

  const [ sumCCSAV, setsumCCSAV ] = useState([]);
  console.log(sumCCSAV)

  const [ sumCCSCL, setsumCCSCL ] = useState([]);
  console.log(sumCCSCL)

  const [ sumOil, setsumOil ] = useState([]);
  console.log(sumOil)

  const [ sumWeightOil, setsumWeightOil ] = useState([]);
  console.log(sumWeightOil)

  // {"Bill": 25, "CCSAV": 5.65, "CCSCL": 5.65, "Date": "2022-01-02", "No": 1, "Oil": 7800, "PH": "0811111111", "WeightCane": 5400, "WeightOil": 1500}
  // );

  const [service, setService] = useState("");

  const Phone = route.params;  

  useEffect(() => {
    if (service !== "") {
      // Fetch data based on the selected service value
      try {
        const url = `http://192.168.0.250:5000/report?var_Period=${service}&var_Phone=${info1}`;
        console.log(url);
        axios.get(url)
          .then((res) => {
            // Update your state variables with the fetched data
            setsumBil(res.data.sumBil);
            setsumWeightCane(res.data.sumWeightCane);
            setsumCCSAV(res.data.sumCCSAV);
            setsumCCSCL(res.data.sumCCSCL);
            setsumOil(res.data.sumOil);
            setsumWeightOil(res.data.sumWeightOil);
            setData_d(res.data.res_report_no);
            console.log('axios res -->', res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [info1, service]);



  const renderItem = ({ item }) => (
    <View style={styles.row} >

      {/* <Ionicons name="add-outline" size={20} color={COLORS.Blue}/> */}

      <Text style={styles.cell}>{item.Date}</Text>
      <Text style={styles.cell}>{item.Bill}</Text>

      <Pressable 
              onPress={()=>navigation.navigate("DailyCane")}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.Gold,
                  fontWeight: "bold",
                  marginLeft: 6
                }}>ดูเพิ่มเติม</Text>
                </Pressable>
      
    </View>
  )


  return (

    <ScrollView>
    
    <View>
      
    <Text style={{
        fontStyle:"italic",
        paddingTop: 10,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 17

      }}>ตรวจเช็ครายงาน CCS </Text>

      <Box maxW="500">
              <Select selectedValue={service} minWidth="250" placeholder="กรุณาเลือกงวด" backgroundColor={'blueGray.900'} color={'white'}  mt={3} 
              onValueChange={itemValue => setService(itemValue)}>
                <Select.Item label="งวดที่ 1 " value="1" />
                <Select.Item label="งวดที่ 2 " value="2"/>
              </Select>
              {/* {service === "1" ? (
              <Text>{user.No1}</Text>
            ) : service === "2" ? (
              <Text></Text>
            ) : (
              <Text>{user.No2}</Text>
            )} */}
      </Box>
            {/* Select.Item label="UX Research" value="ux" */}
            {/* Select.Item label="Web Development" value="web" */}
            {/* Select.Item label="Cross Platform Development" value="cross" */}
            {/* Select.Item label="UI Designing" value="ui" */}
            {/* Select.Item label="Backend Development" value="backend"  */}

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={5}>
        <Center bg="#091E40" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

        จำนวลบิล : {sumBil}

        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

          CCS เฉลี่ย : {sumCCSAV}

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#091E40" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

          น้ำหนัก : {sumWeightCane}

        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

          น้ำมัน : {sumOil}

        </Center>
      </HStack>

      <HStack space={5} alignItems="center" justifyContent={"center"} paddingTop={3} >
        <Center bg="#091E40" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

          CCS สะสม : {sumCCSCL}


        </Center>
        <Center bg="#86754e" width={150} height={60} borderRadius={10} _text={{ color: "#FFFFFF" }} borderWidth={1} shadow={5}>

          นน.สะสม : {sumWeightOil}


        </Center>
      </HStack>


      <View style={styles.flatlist}>
        <View style={styles.header}>
          <Text style={styles.heading}>วันที่</Text>
          <Text style={styles.heading}>จำนวนบิล</Text>
          <Text style={styles.heading}></Text>

        </View>
        <FlatList
          data={Data_d}
          keyExtractor={(item) => { item.id }}
          renderItem={renderItem}
          
        />

      </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  picker: {
    width: 200,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
  },
  box: {
    marginHorizontal: 10,
    width: 180,
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
  flatlist: {
    top: 2
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 10,
    borderColor: '#000000',
    padding: 20,
    borderWidth: 1,
    marginVertical: 4,
  },
  heading: {
    flex: 1,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    marginHorizontal: 1,
    elevation: 2,
    borderRadius: 2,
    borderColor: '#000000',
    borderWidth: 1,

    padding: 15,
    backgroundColor: '#C0C0C0'
  },
  cell: {
    fontSize: 15,
    textAlign: 'left',
    flex: 1,


  },
  list: {
    backgroundColor: '#000000'
  }

});


export default Report



// useEffect(()=>{   
  //   console.log('changereport');
  //   console.log(report.res_report_no[1].Bill);

  //   if ( len(report) > 1 ){
  //     setReport(report.res_report_no[1]);
  //   }



  // },[report])



  // const Select = () => {

  //   if (Period == "0822222222")
  //   {navigation.navigate("Home")
  //   }
  //   else {
  //     Alert.alert('หมายเลขโทรศัพท์ หรือ รหัสผ่าน ไม่ถูกต้อง');
  //   console.log("หมายเลขโทรศัพท์ ไม่ถูกต้อง ")
  //   console.log("รหัสผ่าน ไม่ถูกต้อง")
  //   }
  // }
{/* <DataTable style={styles.container} paddingTop={20} >

        // <DataTable.Header style={styles.tableHeader}  alignItems="center" justifyContent={"center"} >

        //   <DataTable.Title> วันที่ </DataTable.Title>

        //   <DataTable.Title> จำนวนบิล </DataTable.Title>

        // </DataTable.Header>

      //   <DataTable.Row>
      //     <DataTable.Cell>{report.Date} </DataTable.Cell>
      //     <DataTable.Cell>{report.Bill} </DataTable.Cell>
      //   </DataTable.Row>

      // <DataTable.Row>
      //   <DataTable.Cell>{report.Date} </DataTable.Cell>
      //   <DataTable.Cell>{report.Bill} </DataTable.Cell>
      // </DataTable.Row>

      <DataTable.Row> */}
{/* <DataTable.Cell> {report.Date}  </DataTable.Cell>
        <DataTable.Cell> {report.Bill}</DataTable.Cell> */}
{/* </DataTable.Row>

      <DataTable.Row> */}
{/* <DataTable.Cell> {report.Date}  </DataTable.Cell>
        <DataTable.Cell> {report.Bill}</DataTable.Cell> */}
{/* </DataTable.Row>

      <DataTable.Row> */}
{/* <DataTable.Cell> {report.Date}  </DataTable.Cell>
        <DataTable.Cell> {report.Bill}</DataTable.Cell> */}
{/* </DataTable.Row>

    </DataTable> */}


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




