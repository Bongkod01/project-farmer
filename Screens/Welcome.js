import { View, Text, Pressable } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import { Image } from 'react-native';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { setAppName } from '../redux/WelcomeSlice';

const Welcome = ({}) => {

  const Dispatch = useDispatch();



  const navigation = useNavigation();
  



  const NextLogin = () => {


    const Welcome_Name = "Bo_Welcome";
    
    Dispatch(setAppName(Welcome_Name));

    // const HomeName = "Boe";
    // console.log(HomeName);
    // setHome_Name(HomeName);

    navigation.navigate('Login')
  };

  return(
    <LinearGradient style={{
      flex: 1
    }}
    colors={[COLORS.Blue, COLORS.Gold]}
    >
      <View style={{flex: 1}}>
          <View>
            <Image source={require("../assets/Farmer3.png")} 
            style={{
              height: 120, 
              width:120,
              borderRadius: 20,
              position: "absolute",
              top: 100,
              transform: [
                { translateX: 20},
                { translateY: 50},
                { rotate: "-15deg"}
              ]
            }} 
            
            />

            <Image source={require("../assets/Farmer1.png")} 
            style={{
              height: 120, 
              width: 120,
              borderRadius: 20,
              position: "absolute",
              top: 40,
              left: 120,
              transform: [
                { translateX: 60},
                { translateY: 50},
                { rotate: "7deg"}
              ]
            }} 
            
            />
            <Image source={require("../assets/barn3.png")} 
            style={{
              height: 120, 
              width: 120,
              borderRadius: 20,
              position: "absolute",
              top: 250,
              left: 3,
              transform: [
                { translateX: 50},
                { translateY: 50},
                { rotate: "15deg"}
              ]
            }} 
            
            />
            <Image source={require("../assets/Sugar2.png")} 
            style={{
              height: 200, 
              width: 200,
              borderRadius: 20,
              position: "absolute",
              top: 200,
              left:150,
              transform: [
                { translateX: 50},
                { translateY: 50},
                { rotate: "-15deg"}
              ]
            }} 
            
            />
          </View>

          {/*content */}

            <View style={{
              paddingHorizontal: 22,
              position: "absolute",
              top: 470,
              width: "100%"
            }}>
              <Text style={{
                fontSize: 35,
                fontWeight: 800,
                color: COLORS.white
              }}>Welcome To</Text>

              
              <Text style={{
                fontSize: 40,
                fontWeight: 800,
                color: COLORS.white
              }}>FarmerApp</Text>

              <View style={{marginVertical: 22}}
              >
              <Text style={{
                fontSize: 20,
                color: COLORS.white
              }}>ยินดีต้อนรับเข้าสู่ FarmerApp</Text>
            
            </View>

            <Button
              title="เข้าสู่ระบบ"
              onPress={()=> NextLogin()}
              style={{
                marginTop: 22,
                width: "100%"
              }}
            />

            <View style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center"
            }}>
              <Text style={{
                fontSize: 16,
                color: COLORS.white
              }}>คุณไม่เคยบัญชีใช่รึไม่ ? </Text>
              <Pressable 
                onPress={()=>navigation.navigate("Signup")}
              >

                  <Text style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: "bold",
                    marginLeft: 4
                  }}>ลงทะเบียน</Text>
              </Pressable>



            </View>
          </View>
      </View>

    </LinearGradient>
  )
}
export default Welcome;