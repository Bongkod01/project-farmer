import { View, Text, Pressable } from 'react-native'
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import COLORS from '../constants/colors';
import { Image } from 'react-native';
import Button from '../components/Button';


import { setAppName } from '../redux/WelcomeSlice';


import { useNavigation } from '@react-navigation/native';

// import { setHome_Name } from '../redux/HomeSlice';

const Welcome = ({}) => {

  const navigation = useNavigation();
  

  const NextLogin = () => {


    const WelcomeName = "Bow to FileSlice";
    console.log(WelcomeName);
    setAppName(WelcomeName);

    

    // const HomeName = "Boe";
    // console.log(HomeName);
    // setHome_Name(HomeName);

    navigation.navigate('Login')
  };

  return(
    <LinearGradient style={{
      flex: 1
    }}
    colors={[COLORS.secondary, COLORS.primary]}
    >
      <View style={{flex: 1}}>
          <View>
            <Image source={require("../assets/Farmer3.png")} 
            style={{
              height: 100, 
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 10,
              transform: [
                { translateX: 20},
                { translateY: 50},
                { rotate: "-15deg"}
              ]
            }} 
            
            />

            <Image source={require("../assets/Farmer1.png")} 
            style={{
              height: 100, 
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: -30,
              left: 100,
              transform: [
                { translateX: 50},
                { translateY: 50},
                { rotate: "-5deg"}
              ]
            }} 
            
            />
            <Image source={require("../assets/barn3.png")} 
            style={{
              height: 100, 
              width: 100,
              borderRadius: 20,
              position: "absolute",
              top: 130,
              left: -40,
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
              top: 110,
              left: 100,
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
              top: 400,
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
              title="Join Us"
              onPress={()=>navigation.navigate("Signup")}
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
              }}>Already have an account ? </Text>
              <Pressable 
                onPress={()=> NextLogin()}
              >

                  <Text style={{
                    fontSize: 16,
                    color: COLORS.white,
                    fontWeight: "bold",
                    marginLeft: 4
                  }}>Login</Text>
              </Pressable>



            </View>
          </View>
      </View>

    </LinearGradient>
  )
}
export default Welcome;