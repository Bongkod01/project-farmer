import { View, Text, SafeAreaView, TextInput, TouchableOpacity, ScrollView, Image, Pressable,Alert } from 'react-native'
import React, { useState,useEffect } from 'react'
import COLORS from '../constants/colors';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from "expo-checkbox";
import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setHome_Name } from '../redux/LoginSlice';


const Login = ({ navigation }) => {

    const Dispatch = useDispatch();


    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked,setIsChecked] = useState(false);


    const [Phone,setPhone] = useState(null);
    const [Password,setPassword] = useState(null); 


    const returndata_appname = useSelector((state) => state.welcome.AppName);

    // console.log(' useSelector: ',returndata_appname);





    

    


// const [Data,setData] = useState({


//   username: '',
//   password: ''
// })


useEffect(() =>  {

  // console.log('useEffect: ',returndata_appname)
})


const onClickMe = () => {

          if ( Phone != null && Password != null)
          {navigation.navigate("Home")
          console.log(Phone);
          console.log(Password);
          }
          else {
            let missingFields = [];
        
            if (Phone == null || Phone == '') {
              missingFields.push("หมายเลขโทรศัพท์");
            }
            if (Password == null || Password == '') {
              missingFields.push("รหัสผ่าน");
            }
            if (missingFields.length > 0) {
              Alert.alert("กรุณากรอกข้อมูลให้ครบถ้วน", `ยังไม่ได้กรอก: ${missingFields.join(", ")}`);
            } else {
              console.log("All Fields are null");
            }
          }
          
        
          const Home_Page = "Welcome to Home Page";
        
          Dispatch(setHome_Name(Home_Page));
  

    //   const  onClickMe = () => {

    //   if( Email == "bow" && Password == 1234){
    //      navigation.navigate("Home")
    //   }
    //    else{
    //    console.log("Email ไม่ถูกต้อง ")
    //     console.log("Password ไม่ถูกต้อง")
    //  }


          }

//          useEffect(() => {
//            setData ({
//            username: 'test',
//                password: '1111'
//              })
          
//             console.log(Data)

//            console.log("useEffectLogin")
          
//            }, [])
          
//  console.log(Data)




  return (
    
  <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={{flex: 1, marginHorizontal: 22}}>
        <View style={{ marginVertical: 90}}>
          <Text style={{
          fontSize: 22,
          fontWeight: 'bold',
          marginVertical: 15,
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
          marginVertical: 1
        }}>หมายเลขโทรศัพท์</Text>

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
          value={Phone}
          // value={Data.username}
          onChangeText={(text)=>{setPhone(text)}}
          // onChangeText={(text) => setData((prevState) => ({ ...prevState, username: text }))}

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
        }}>รหัสผ่าน</Text>

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
          placeholder='Enter your Password'
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
      

        <Button
          title="Login"
          onPress={onClickMe}
          filled
          color={COLORS.Blue}
          style={{
            marginTop: 18,
            marginBottom: 4,
          }}/>



          <View style={{
            flexDirection: "row",
            justifyContent: "center",
            marginVertical: 22
          }}>

            <Text style={{fontSize: 16, color: COLORS.black}}>คุณยังไม่มีบัญชีใช่รึไม่ ? </Text>
            <Pressable 
              onPress={()=>navigation.navigate("Signup")}>
                <Text style={{
                  fontSize: 16,
                  color: COLORS.Gold,
                  fontWeight: "bold",
                  marginLeft: 6
                }}>ลงทะเบียน</Text>

                
              </Pressable>

          </View>

        
      </View>
      
    </ScrollView>
    
  </SafeAreaView>

  )





}


export default Login