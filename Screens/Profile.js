import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';
import axios from 'axios'
import { Info } from '@mui/icons-material';


const Profile = ({ navigation }) => {


    const [user, setUser] = useState([]);

  // const onPageLoad = () => {

  //   const data_name = "บงกช บุญเพ็ง";
  //   const data_id = "123456789";
  //   const data_email = "farmerapp@gmail.com";
  //   const data_phone = "091-234-5678";
  //   const data_place = "11/1 กรุงเทพมหานคร";

  //   setData({
  //     Name: data_name,
  //     ID: data_id,
  //     Email: data_email,
  //     Phone: data_phone,
  //     Place: data_place
  //   })

  //   console.log("IN onPageLoad", Data);
  // }

  // state = {
  //   Data: ''
  // }




  
    //     try {
    //   const url = 'http://127.0.0.1:5000/info'
    // axios.get(url).then((res) => {
    //   console.log('axios res -->', res)
    // })
    // } catch (error) {
    //   console.log(error)
    // }

    useEffect(()=>{   

      
      try {

        console.log('LoadProfilePage');
        const url = 'http://192.168.0.250:5000/info'

        axios.get(url).then((res) => {
          setUser(res.data.res_obj_no)
          console.log('axios res -->', res.data)
        })

      } catch (error) {
        console.log(error)
      }
    },[])


    //const urlAPI = `http://192.168.0.250:5000/info`;
    //fetch(urlAPI)
    //.then((response)=>response.json())
    //.then((Jsondata)=>setData(Jsondata))
    //.catch((error)=>(console.error(error)))
    //console.log(Jsondata)


  // useEffect(() => {

  //   console.log("useEffectProfile")

  //   onPageLoad()

  //   console.log("useEffectProfile onPageLoad", Data);
  // }, [])


  return (
    <View style={{ flex: 2 }}>
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
            top: 45
          }}
        /> 
      </View>

      <View style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          top: 160
        }}
        > 
        </Text>

        <View style={styles.row}>
          <Text style={{
            top: 170,
          }}>เลขประจำตัวประชาชน</Text>

          <Text style={{
            top: 170,
          }}> </Text>                      
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 98,
            fontWeight: 'bold'
          }}>ชื่อ</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 100,
            color: '#86754e',
            fontWeight: 'bold'
          }}></Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 50,
            fontWeight: 'bold'
          }}>เบอร์โทรศัพท์</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 40,
            color: '#86754e',
            fontWeight: 'bold'
          }}></Text>
        </View>
        </View>
        <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 60,
            fontWeight: 'bold'
          }}>ที่อยู่</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 52,
            color: '#86754e',
            fontWeight: 'bold'
          }}></Text>
        </View>
        </View>

        
        <View style={styles.row}>
          <Pressable
            onPress={() => navigation.navigate("Login")}>
            <Text style={{
              paddingVertical: 20,
              fontSize: 17,
              color: "#f00",
              fontWeight: 'bold'
            }}>ออกจากระบบ</Text>
          </Pressable>
        </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 10,
    borderColor: '#091E40',
    borderRadius: 20,
    borderWidth: 2,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '',
    textAlign: 'center',
    alignSelf: 'center',
  },

})


export default Profile
