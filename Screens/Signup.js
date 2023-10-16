import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Pressable,Alert } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { Button } from 'react-native';
import axios from 'axios'

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
              if (FirstName == null )
              {
                Alert.alert("กรุณากรอกชื่อจริง")
              }
              else if (LastName == null )
              {
                Alert.alert("กรุณากรอกนามสกุล")
              }
              else if (Phone == null )
              {
                Alert.alert("กรุณากรอกเบอร์โทรศัพท์")
              }
              else if (Phone.length < 10)
              {
                Alert.alert("กรุณากรอกเบอร์โทรศัพท์ให้ครบ 10 หลัก")
              }
              else if (IDCard == null )
              {
                Alert.alert("กรุณากรอกเลขบัตรประชาชน")
              }
              else if (IDCard.length < 13)
              {
                Alert.alert("กรุณากรอกเลขบัตรประชาชนให้ครบ 13 หลัก")
              
              }
              else if (Password == null )
              {
                Alert.alert("กรุณาตั้งค่ารหัสผ่าน")
              }
              else if (Password.length < 6  )
              {
                Alert.alert("กรุณาตั้งค่ารหัสผ่านอย่างน้อย 6 ตัว")
              }
              else if (Address == null )
              {
                Alert.alert("กรุณากรอกที่อยู่")
              }

              else {

                const Test = []
                const test = {
                }
                const obj_json = {
                  "FirstName" : FirstName ,
                  "LastName" : LastName,
                  "Phone" : Phone,
                  "Password" : Password,
                  "IDCard" : IDCard,
                  "Address" : Address
                };
                const url = 'http://192.168.0.250:5000/register'
                axios.post(url,obj_json).then((res) => {
                console.log('axios res -->', res.data)
              })

                navigation.navigate("Login");
              }
            }


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
            placeholder='Enter your first name'
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
            placeholder='Enter your lastname name'
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
            placeholder='Enter your ID Card number'
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