import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { Button } from 'react-native';

const Signup = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked,setIsChecked] = useState(false);


    const [FullName,setFullName] = useState(null);
    const [IDCard,setIDCard] = useState(null);
    const [Phone,setPhone] = useState(null);
    const [Password,setPassword] = useState(null); 
    const [Address,setAddress] = useState(null); 

    const onClickMe = () => {
      
              if ( FullName == "ใจดี มีสุข" || Phone == "0822222222" || IDCard == "1100110011001" || Password == "1234" || Address == "22/2 กรุงเทพมหานคร" )
              {navigation.navigate("Login")      
              }
              else { 
              Alert.alert('กรุณากรอกข้อมูลให้ครบถ้วน');
              console.log("ชื่อหรือนามสกุล ยังไม่ได้กรอก")
              console.log("เบอร์โทรศัพท์ ยังไม่ได้กรอก")
              console.log("เลขบัตรประจำตัวประชาชน ยังไม่ได้กรอก")
              console.log("ตั้งค่ารหัสผ่าน ยังไม่ได้กรอก")
              console.log("ที่อยู่ ยังไม่ได้กรอก")
              }
            }
            


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{ marginHorizontal: 22}}>
        <View style={{ marginVertical: 50}}>
          <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 5,
          textAlign: 'center',
          color: COLORS.black
          }}> 
            Create account
          </Text>
        <Text style={{ 
          fontSize: 16,
          color: COLORS.black,
          textAlign: 'center',
          marginVertical: 2
        }}>สมัครสมาชิก</Text>
        </View>

        <View style={{marginBottom: 12}}>
          <Text style={{
            fontSize: 16,
            fontWeight: 400,
            marginVertical: 1
          }}>ชื่อ-นามสกุล</Text>

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
            onChangeText={(text)=>{setFullName(text)}}
            keyboardType='default'
            style={{
              width: "100%"
            }}/>
          </View>
          </View>



        <View style={{marginBottom: 12}}>
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
            keyboardType='numeric'
            onChangeText={(text)=>{setPhone(text)}}
            style={{
              width: "100%"
            }}/>
          </View>
          </View>

          <View style={{marginBottom: 12}}>
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
            keyboardType='numeric'
            onChangeText={(text)=>{setIDCard(text)}}

            style={{
              width: "80%"
            }}/>

          </View>
          </View>

          <View style={{marginBottom: 12}}>
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
            onChangeText={(text)=>{setAddress(text)}}
            keyboardType='default'
            style={{
              width: "100%"
            }}/>
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