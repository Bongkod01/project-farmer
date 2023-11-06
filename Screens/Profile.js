import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, TextInput,ActivityIndicator  } from 'react-native';
import { Image } from 'react-native';
import axios from 'axios'


const Profile = ({ navigation,route }) => {


  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
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

      console.log('LoadProfilePage');
    const url = 'http://192.168.0.250:5000/info/phone';

    axios.get(url)
      .then((res) => {
        setUser(res.data);
        console.log('axios res -->', res.data);
      })
      .catch((error) => {
        console.log('axios error -->', error);
      });
  }, []);

    //   const fetchData = async () => {
    //     try {
    //       const url = 'http://192.168.0.250:5000/info/phone';
    //       const response = await axios.get(url);
    //       setUser(response.data);
    //     } catch (error) {
    //       console.error(error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchData();
    // }, []);
  
    // if (loading) {
    //   return (
    //     <View>
    //       <ActivityIndicator size="large" />
    //     </View>
    //   );
    // }
  
    // if (!user) {
    //   return (
    //     <View>
    //       <Text>Error loading user information.</Text>
    //     </View>
    //   );
    // }
    

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
        <Image source={require("../assets/blankpf.png")}
          style={{
            flex: 1,
            height: 120,
            width: 120,
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 20,
            position: "absolute",
            top: 50
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>
        <Text style={{
          fontSize: 20,
          fontWeight: 'bold',
          top: 180
        }}
        >{user.FN} {user.LN}</Text>

        <View style={styles.row}>
          <Text style={{
            top: 183,
          }}>เลขประจำตัวประชาชน</Text>

          <Text style={{
            top: 185,
          }}>{user.IDC} </Text>                      
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 110,
            fontWeight: 'bold'
          }}>ชื่อ</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 120,
            color: '#86754e',
            fontWeight: 'bold'
          }}>{user.FN} {user.LN}</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 70,
            fontWeight: 'bold'
          }}>เบอร์โทรศัพท์</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 85,
            color: '#86754e',
            fontWeight: 'bold'
          }}>{user.PH}</Text>
        </View>
        </View>

        <View style={styles.container}>
        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 95,
            fontWeight: 'bold'
          }}>ที่อยู่</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 110,
            color: '#86754e',
            fontWeight: 'bold'
          }}>{user.AD}</Text>
        </View>
        </View>

        
        <View style={styles.row}>
          <Pressable
            onPress={() => navigation.navigate("Login")}>
            <Text style={{
              paddingVertical: 45,
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
    marginVertical: 20,
    marginHorizontal: 10,
    borderColor: '#091E40',
    borderRadius: 10,
    borderWidth: 2
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '',
    textAlign: 'center',
    alignSelf: 'center',
  },

})


export default Profile
