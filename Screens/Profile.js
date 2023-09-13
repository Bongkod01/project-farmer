import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, TextInput } from 'react-native';
import { Image } from 'react-native';

const Profile = ({ navigation }) => {

  const [Data, setData] = useState({
    Name: '',
    ID: '',
    Email: '',
    Phone: '',
    Place: ''
  })

  const onPageLoad = () => {

    const data_name = "บงกช บุญเพ็ง";
    const data_id = "123456789";
    const data_email = "farmerapp@gmail.com";
    const data_phone = "091-234-5678";
    const data_place = "11/1 กรุงเทพมหานคร";

    setData({
      Name: data_name,
      ID: data_id,
      Email: data_email,
      Phone: data_phone,
      Place: data_place
    })

    console.log("IN onPageLoad", Data);
  }


  useEffect(() => {
    console.log("useEffectProfile")

    onPageLoad()

    console.log("useEffectProfile onPageLoad", Data);
  }, [])


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
        >{Data.Name}</Text>

        <View style={styles.row}>
          <Text style={{
            top: 140,
          }}>เลขประจำตัวชาวไร่</Text>

          <Text style={{
            top: 140,
          }}>{Data.ID}</Text>
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
            marginHorizontal: 90,
            color: '#868080',
            fontWeight: 'bold'
          }}>{Data.Name}</Text>
        </View>

        <View style={styles.row}>
          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 50,
            fontWeight: 'bold'
          }}>Email</Text>

          <Text style={{
            paddingVertical: 30,
            alignSelf: 'flex-start',
            fontSize: 17,
            marginHorizontal: 40,
            color: '#868080',
            fontWeight: 'bold'
          }}>{Data.Email}</Text>
        </View>

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
            marginHorizontal: 50,
            color: '#868080',
            fontWeight: 'bold'
          }}>{Data.Phone}</Text>
        </View>

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
            color: '#868080',
            fontWeight: 'bold'
          }}>{Data.Place}</Text>
        </View>


        <View style={styles.row}>
          <Pressable
            onPress={() => navigation.navigate("Login")}>
            <Text style={{
              paddingVertical: 30,
              alignSelf: 'flex-start',
              fontSize: 17,
              color: "#f00",
              fontWeight: 'bold'
            }}>ออกจากระบบ</Text>
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
