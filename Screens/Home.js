import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,Pressable, } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './Profile';
import { VStack,HStack,Spacer , Center, NativeBaseConfigProvider,Stack,Button } from "native-base";
import { Image } from 'react-native';

import COLORS from '../constants/colors';
import Report from './Report';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

const HomeRoute = () => (
  <View style={[styles.scene, { backgroundColor: '"#ffffff"' }]} />
);

const ReportRoute = () => (
  <View style={[styles.scene, { backgroundColor: '"#ffffff"' }]} />
);

const ProfileRoute = () => (
  <View style={[styles.scene, { backgroundColor: '"#ffffff"' }]} />
);


//  const ary = []
//  const mainnumber = 0
// let number = 0

// const onClickMe = () => {
//   if (mainnumber == 0) {
//     number++
//     ary.push(number)
//   } else{
//     number--
//   }

//   console.log("นับจำนวน")
//   console.log(number);

//   console.log("เพิ่มค่าเข้าไปใน array")
//   console.log(ary);

// if (number == 5)
// {
//   for (let index = 0; index < ary.length; index++) {
//     const element = ary[2];
//     console.log(element);
//   }
// }

// [1, 2, 3, 4] data

// [0, 1, 2, 3] index

// data = ค่า 1 ตำแหน่งที่ [0]


// }

   let DogClass_Definition = ({
     DogName: "",
     DogAge: 0,
     DogBreed: "",
     DogColor: ""
  });

  

  const onClickMe = () => {
    
    // const data_dog_ME_name = "Woonsen";
    // const data_dog_Age = 2;
    // const data_dog_Breed = "Shiba Inu";
    // const data_dog_Color = "Orange";

    // DogClass_Definition={
    //   DogName:data_dog_ME_name,
    //   DogAge:data_dog_Age,
    //   DogBreed: data_dog_Breed,
    //   DogColor:data_dog_Color,
    // }


    if (DogClass_Definition.DogName == '') {

      const data_dog_ME_name2 = "Itim";
      const data_dog_Age2 = 4;
      const data_dog_Breed2 = "Beaggle";
      const data_dog_Color2 = "Brown";

      DogClass_Definition={
      DogName:data_dog_ME_name2,
      DogAge:data_dog_Age2,
      DogBreed: data_dog_Breed2,
      DogColor:data_dog_Color2,
    }
  }
    
  console.log (DogClass_Definition)
 }


 
 console.log (DogClass_Definition)



 const initialLayout = { width: Dimensions.get('window').width };

  const Home = ({ navigation }) => {

  const HomeScreen = () => (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

       <Text>Dog</Text>

       <Button onPress={onClickMe}> Click Me</Button>

    </View>
  );




      /* <Heading>HStack</Heading> */
   
  //     <HStack space={3} alignItems="center">
  //       <Center size={16} bg="primary.400" rounded="md" _text={{
  //       color: "white"
  //     }} shadow={3}>
  //         Box 1
  //       </Center>
  //       <Center bg="secondary.400" size={16} rounded="md" _text={{
  //       color: "white"
  //     }} shadow={3}>
  //         Box 2
  //       </Center>
  //       <Center size={16} bg="emerald.400" rounded="md" _text={{
  //       color: "white"
  //     }} shadow={3}>
  //         Box 3
  //       </Center>
  //     </HStack>
  //   </Stack>
  //   </View>

    
  //; 




  // const ProfileScreen = () => {
  //   return (
  //     <View style={{ flex: 1 }}>
  //       <View>
  //         <Image source={require("../assets/Farmer3.png")}
  //           style={{
  //             flex: 1,
  //             height: 100,
  //             width: 100,
  //             alignItems: 'center',
  //             alignSelf: 'center',
  //             borderRadius: 20,
  //             position: "absolute",
  //             top: 20
  //           }}
  //         />
  //       </View>

  //       <View style={{ flex: 1, alignItems: 'center', textAlign: 'center' }}>
  //         <Text style={{
  //           fontSize: 20,
  //           fontWeight: 'bold',
  //           top: 130
  //         }}
  //         >นายใจดี มีสุข</Text>
  //         <Text style={{
  //           top: 140,
  //         }}>เลขประจำตัวชาวไร่ 123456789</Text>
  //       </View>

  //       <View style={styles.container}>
  //           <View style={styles.row}>
  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 98,
  //               fontWeight: 'bold'}}>ชื่อ</Text>

  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 90,
  //               color: '#868080',
  //               fontWeight: 'bold'}}>นายใจดี มีสุข </Text>
  //           </View>

  //           <View style={styles.row}>
  //              <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 50,
  //               fontWeight: 'bold'}}>Email</Text>

  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 40,
  //               color: '#868080',
  //               fontWeight: 'bold'}}>FarmerApp@gmail.com</Text>
  //           </View>

  //           <View style={styles.row}>
  //              <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 50,
  //               fontWeight: 'bold'}}>เบอร์โทรศัพท์</Text>
                
  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 50,
  //               color: '#868080',
  //               fontWeight: 'bold'}}> 091-234-5678</Text>
  //           </View>

  //           <View style={styles.row}>
  //              <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 60,
  //               fontWeight: 'bold'}}>ที่อยู่</Text>

  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 52,
  //               color: '#868080',
  //               fontWeight: 'bold'}}>99/9, กรุงเทพมหานคร</Text>
  //           </View>


  //           <View style={styles.row}>
  //             <Pressable 
  //             onPress={()=>navigation.navigate("Login")}>
  //             <Text style={{
  //               paddingVertical: 30,
  //               alignSelf: 'flex-start',
  //               fontSize: 17,
  //               marginHorizontal: 20,
  //               color: "#f00",
  //               fontWeight: 'bold'}}>ออกจากระบบ</Text>
  //             </Pressable>
  //           </View>

            {/* {/* <Text style={{
              paddingVertical: 10,
              lineHeight: 32,
              alignSelf: 'flex-start',
              fontSize: 18,
              fontWeight: 'bold',
            }}>ชื่อ</Text>
            <Text style={{
              paddingVertical: 10,
              lineHeight: 32,
              alignSelf: 'flex-end',
              fontSize: 18,
              fontWeight: 'bold',
            }}> นายใจดี มีสุข </Text>
           */}
          {/* <Text style={{
            paddingVertical: 10,
            lineHeight: 32,
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold'
          }}>Email</Text>

          <Text style={{
            paddingVertical: 10,
            lineHeight: 32,
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold'
          }}>เบอร์โทรศัพท์</Text>

          <Text style={{
            paddingVertical: 10,
            lineHeight: 32,
            alignSelf: 'flex-start',
            fontSize: 18,
            fontWeight: 'bold'
          // }}>ที่อยู่</Text> */}

        {/* </View>
      </View>
    );
  };




  const ReportScreen = () => {
    const [selectedValue, setSelectedValue] = useState('option1');
  
    return (
      <View>
        <Picker style={{ backgroundColor: '#D9D9D9'}}
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}>
          <Picker.Item label="--กรุณาเลือกงวด--" value="option1" />
          <Picker.Item label="งวดที่ 1" value="option2" />
          <Picker.Item label="งวดที่ 2" value="option3" />
          <Picker.Item label="งวดที่ 3" value="option4" />
        </Picker>




        <View style={styles.containerr}>
          <View style={styles.box }>
          <Text style={{
            color: "#ffffff",
          }}>จำนวนบิล: --</Text>
          </View>

      <View style={styles.box}>
          <Text style={{
            color: "#ffffff",
          }}> CCS เฉลี่ย: --</Text>
      </View>

      <View style={styles.box}>
          <Text style={{
            color: "#ffffff",
          }}>น้ำหนัก: --</Text>
      </View> 
 </View> */}



        {/* <View style={styles.rowbutton}>
          <Button
          title="จำนวนบิล: --"
          color={COLORS.primary}
          style={{}}></Button>

           
          <Button
          title="CCS เฉลี่ย: --"
          color={COLORS.greyy}
          style={{
          
          }}></Button></View>

        <View style={styles.rowbutton}>
          <Button
          title="น้ำหนัก: --"
          color={COLORS.primary}
          style={{
           
          }}></Button>

           
          <Button
          title="น้ำมัน: --"
          color={COLORS.greyy}
          style={{
            
          }}></Button></View>

        <View style={styles.rowbutton}>
          <Button
          title="CCS สะสม: --"
          color={COLORS.primary}
          style={{
          
          }}></Button>

          
          <Button
          title="นน.สะสม: --"
          color={COLORS.greyy}
          style={{
            
          }}></Button>

        </View> */}









        {/* <View style={styles.rowbutton}>
          <Button
          title="CCS เฉลี่ย: --"
          color={COLORS.greyy}
          style={{
          
          }}></Button></View> */}

        {/* <View style={styles.rowbutton}>
          <Button
          title="น้ำมัน: --"
          color={COLORS.greyy}
          style={{
          }}></Button></View> */}

        {/* <View style={styles.rowbutton}>
          <Button
          title="นน.สะสม: --"
          color={COLORS.greyy}
          style={{
            
          }}></Button></View> */}
  //     </View>
  //   );
  // };




  return (
    <Tab.Navigator>
      <Tab.Screen name="หน้าหลัก"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={"#007260"} />
          ),
        }}
      />
      <Tab.Screen name="รายงาน CCS"
        component={Report}
        onPress={()=>navigation.navigate("Report")}
        options={{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'document' : 'document-text-outline'} size={size} color={"#007260"} />
          ),
        }}
      />
      <Tab.Screen name="Profile"
        component={Profile}
        onPress={()=>navigation.navigate("Profile")}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={"#007260"} />
          ),
        }}
      />

    </Tab.Navigator>
  );
  }


const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: '"#ffffff"',
  },
  indicator: {
    backgroundColor: '"#ffffff"',
  },
  row: {
    flexDirection: 'row',
    backgroundColor: ''
    
  },
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
  // picker: {
  //   width: 200,
  //   height: 50,
  //   borderColor: '#007260',
  //   borderWidth: 1
  // },
  // box: {
  //   marginHorizontal: 10,
  //   width: 170,
  //   marginVertical: 20,
  //   height: 50,
  //   borderRadius: 5,
  //   backgroundColor: '#007260',
  //   marginBottom: 10,
  //   alignItems: 'center',
  //   justifyContent: 'center',
    
  // }
    

  // rowbutton: {
  //   flexDirection: 'row',
  //    marginHorizontal: 30,
  //    marginVertical: 10,
  //    paddingVertical: 10,
    
  //    justifyContent: 'center',
  
});

 export default Home