import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { Button } from 'react-native';


const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked,setIsChecked] = useState(false);
  return (
   <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{ marginVertical: 50}}>
          <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 12,
          textAlign: 'center',
          color: COLORS.black
          }}> 
            Login
          </Text>
        <Text style={{ 
          fontSize: 16,
          color: COLORS.black,
          textAlign: 'center',
        }}>เข้าสู่ระบบ</Text>
        </View>


       <View style={{marginBottom: 12}}>
        <Text style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8
        }}>Email</Text>

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
          placeholder='Enter your email'
          placeholderTextColor={COLORS.grey}
          keyboardType='email-address'
          style={{
            width: "100%"
          }}/>
        </View>
        </View>


        <View style={{marginBottom: 12}}>
        <Text style={{
          fontSize: 16,
          fontWeight: 400,
          marginVertical: 8
        }}>Password</Text>

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
                <Ionicons name="eye-off" size={20} color={COLORS.primary}/>
            ) : (
              <Ionicons name="eye" size={20} color={COLORS.primary}/>
            )

          }

          </TouchableOpacity>
        </View>
      </View>
      
      <View style={{
        flexDirection: "row",
        marginVertical: 6
      }}>
        <Checkbox
          style={{marginRight: 8}}
          value={isChecked}
          onValueChange={setIsChecked}
          color={isChecked ? COLORS.primary:undefined}
        />

        <Text>Remember Me</Text>
      </View>

        <Button
          title="Login"
          onPress={()=>navigation.navigate("Home")}
          filled
          color={COLORS.primary}
          style={{
            marginTop: 18,
            marginBottom: 4
          }}/>
        

  

      
          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22
          }}>

            <Text style={{fontSize: 16, color: COLORS.black}}>Don't have an account ?</Text>
            <Pressable 
              onPress={()=>navigation.navigate("Signup")}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.primary,
                  fontWeight: "bold",
                  marginLeft: 6
                }}>Register</Text>
              </Pressable>

          </View>


      </View>
    </ScrollView>
   </SafeAreaView>
  )
}

export default Login