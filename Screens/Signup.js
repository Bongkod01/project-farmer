import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { Button } from 'react-native';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked,setIsChecked] = useState(false);


    const [FirstName,setFirstName] = useState(null);
    const [LastName,setLastName] = useState(null);



    const [IDCard,setIDCard] = useState(null);
    const [Phone,setPhone] = useState(null);
    const [Password,setPassword] = useState(null); 
    const [Address,setAddress] = useState(null); 

    const onClickMe = () => {
      if (FirstName != null && LastName != null &&IDCard != null &&Phone != null &&Password != null &&Address != null) 
      {
        navigation.navigate("Login");
        console.log(FirstName);
        console.log(LastName);
        console.log(IDCard);
        console.log(Phone);
        console.log(Password);
        console.log(Address);
      } 
      else {
        let missingFields = [];
    
        if (FirstName == null || FirstName == '') {
          missingFields.push("ชื่อ");
        }
        if (LastName == null || LastName == '') {
          missingFields.push("นามสกุล");
        }
        if (IDCard == null || IDCard == '') {
          missingFields.push("เลขบัตรประชาชน");
        }
        if (Phone == null || Phone == '') {
          missingFields.push("หมายเลขโทรศัพท์");
        }
        if (Password == null || Password == '') {
          missingFields.push("รหัสผ่าน");
        }
        if (Address == null || Address == '') {
          missingFields.push("ที่อยู่");
        }
    
        if (missingFields.length > 0) {
          Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน", `ยังไม่ได้กรอก: ${missingFields.join(", ")}`);
        } else {
          console.log("All Fields are null");
        }
      }
    };
    

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{ marginHorizontal: 25}}>
        <View style={{ marginVertical: 60}}>
          <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 5,
          textAlign: 'center',
          color: COLORS.black
          }}> 
            Create Account
          </Text>
        <Text style={{ 
          fontSize: 16,
          color: COLORS.black,
          textAlign: 'center',
          marginVertical: 2
        }}>สมัครสมาชิก</Text>
        </View>
      
        <View style={{marginBottom: 1}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>ชื่อ</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
            placeholder='Enter your full name'
            placeholderTextColor={COLORS.grey}
            value={FirstName}
            onChangeText={(text)=>{setFirstName(text)}}
            keyboardType='default'
            style={{
              width: "100%"
            }}/>
          </View>
          
          
          
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>นามสกุล</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
            placeholder='Enter your full name'
            placeholderTextColor={COLORS.grey}
            value={LastName}
            onChangeText={(text)=>{setLastName(text)}}
            keyboardType='default'
            style={{
              width: "100%"
            }}/>
          </View>


        
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>เบอร์โทรศัพท์</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
            placeholder='Enter your Phone'
            placeholderTextColor={COLORS.grey}
            value={Phone}
            keyboardType='numeric'
            onChangeText={(text)=>{setPhone(text)}}
            style={{
              width: "100%"
            }}/>
          </View>
          

          
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>เลขบัตรประจำตัวประชาชน</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 22
          }}>
        

            <TextInput
            placeholder='Enter your phone number'
            placeholderTextColor={COLORS.grey}
            value={IDCard}
            keyboardType='numeric'
            onChangeText={(text)=>{setIDCard(text)}}

            style={{
              width: "80%"
            }}/>

          </View>
          

          
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>ตั้งค่ารหัสผ่าน</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
            placeholder='Enter your password'
            placeholderTextColor={COLORS.grey}
            value={Password}
            secureTextEntry={isPasswordShown}
            onChangeText={(text)=>{setPassword(text)}}

            style={{
              width: "100%"
            }}/>

            <TouchableOpacity 
              onPress={()=>setIsPasswordShown(!isPasswordShown)}
              style={{
              position: "absolute",
              right: 12
            }}>

            {
              isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={20} color={COLORS.Blue}/>
              ) : (
                <Ionicons name="eye" size={20} color={COLORS.Blue}/>
              )

            }

            </TouchableOpacity>
          </View>
          

          <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>ที่อยู่</Text>

          <View style={{
            width: "100%",
            height: 48,
            borderColor: COLORS.black,
            borderWidth: 1,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 22
          }}>
            <TextInput
            placeholder='Enter your Address'
            placeholderTextColor={COLORS.grey}
            value={Address}
            onChangeText={(text)=>{setAddress(text)}}
            keyboardType='default'
            style={{
              width: "100%"
            }}/>
          </View>
        </View>
        </View>
        
        <View style={{
          flexDirection: "row",
          marginVertical: 10
        }}>
          <Checkbox
            style={{marginRight: 8}}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.Gold:undefined}
          />

          <Text>ยอมรับข้อตกลงและเงื่อนไขการใช้งานนี้</Text>
        </View>

          <Button
            title="Sign Up"
            onPress={onClickMe}
            filled
            color={COLORS.Blue}
            style={{
              marginTop: 18,
              marginBottom: 4
            }}>
          </Button> 
        
            <View style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 15
            }}>

              <Text style={{fontSize: 16, color: COLORS.black}}>มีบัญชีผู้ใช้อยู่แล้ว ?</Text>
              <Pressable 
                onPress={()=>navigation.navigate("Login")}>
                  <Text style={{
                    fontSize: 16,
                    color: COLORS.Gold,
                    fontWeight: "bold",
                    marginLeft: 6
                  }}>Login
                  
                  </Text>
                </Pressable>

            </View>


      </View>
      </ScrollView>
    </SafeAreaView>
    )
  }

export default Signup