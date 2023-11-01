import React, { useState } from 'react';
import { Text, View, StyleSheet, Dimensions,LineChart,FlatList,e, TouchableOpacity,chartConfig,Pressable,ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { Picker } from '@react-native-picker/picker';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import ProfileScreen from './Profile';
import { VStack,HStack,Spacer,Heading,Divider , Center, NativeBaseConfigProvider,Stack,Button } from "native-base";
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
import COLORS from '../constants/colors';
import Report from './Report';
import Profile from './Profile';

import { useDispatch } from 'react-redux';



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

  //  let DogClass_Definition = ({
  //    DogName: "",
  //    DogAge: 0,
  //    DogBreed: "",
  //    DogColor: ""
  // });

  

  // const onClickMe = () => {
    
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


//     if (DogClass_Definition.DogName == '') {

//       const data_dog_ME_name2 = "Itim";
//       const data_dog_Age2 = 4;
//       const data_dog_Breed2 = "Beaggle";
//       const data_dog_Color2 = "Brown";

//       DogClass_Definition={
//       DogName:data_dog_ME_name2,
//       DogAge:data_dog_Age2,
//       DogBreed: data_dog_Breed2,
//       DogColor:data_dog_Color2,
//     }
//   }
    
//   console.log (DogClass_Definition)
//  }
//  console.log (DogClass_Definition)


  const initialLayout = { width: Dimensions.get('window').width };

  const Home = ({ navigation }) => {


    const return_home = useSelector((state) => state.welcome.Home_Page);
    
    

  const HomeScreen = () => (

    
<ScrollView>
<View>
    
  

      <Image source={require("../assets/logotrr.png")}
      style={{
        height: 200, 
        width: 320,
        borderRadius: 10,
        alignSelf: "center",
        top: 30,}}>
      </Image>

      <Text style={{
        fontStyle:"italic",
        paddingTop: 50,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 17

      }}>       " กลุ่มไทยรุ่งเรืองมีโรงงานในเครือทั้งหมด    10  โรงงาน  มีกำลังการผลิตทั้งหมด 301,000 ตันต่อวัน    ซึ่งเป็นกลุ่มน้ำตาลที่มีกำลังการผลิตสูงที่สุดในประเทศไทย "</Text>


      <Divider space="1" mt="5" px="5" />
      <Heading size="md" mt="2" px="5" >ธุรกิจของเรา</Heading>
        <HStack space="8" mt="8" px="10">
        <Image source={require("../assets/factory.png")}
        style={{
          height: 150, 
          width: 150,
          borderRadius: 10,
          alignSelf: "center",
  
          top: 2
        }}>
        </Image>
        <Image source={require("../assets/Notes.png")}
        style={{
          height: 150, 
          width: 150,
          borderRadius: 10,
          alignSelf: "center",
          top: 2
        }}>
        </Image>
        </HStack>
        
        <HStack space={1} alignItems="center" justifyContent={"flex-start"} paddingTop={7} >
          <Stack direction="row" mb="2" mt="1" space={3}></Stack>
        <Center bg="#091E40" width={407} height={100} borderRadius={10} _text={{color: "#FFFFFF"}}>
        กลุ่มไทยรุ่งเรือง ทำธุรกิจเกี่ยวกับอุตสหากรรมอ้อยและน้ำตาลทรายมายาวนานที่สุดในประเทศไทยและยังได้ขยายธุรกิจไปยังธุรกิจอื่นๆอีกมากมาย
        </Center>
        </HStack>
        
        <Divider space="1" mt="5" px="5" />
        <Heading size="md" mt="2" px="5" >วิสัยทัศน์</Heading>
        <HStack space={1} alignItems="center" justifyContent={"flex-start"} paddingTop={7} >
          <Stack direction="row" mb="2" mt="1" space={3}></Stack>
        <Center bg="#091E40" width={407} height={150} borderRadius={10} _text={{color: "#FFFFFF"}} >
        " เรามุ่งมั่นเพื่อเป็นบริษัทชั้นนำระดับโลก ในการแปรรูปผลิตภัณฑ์จากอ้อยอย่างครบวงจร ด้วยนวัตกรรมและเทคโนโลยีที่มีมาตรฐาน บริหารงานโดยยึดหลักของคุณธรรม ความซื้อสัตย์ คุณภาพและความยั่งยืน โดยคำนึงถึงความรับผิดชอบต่อสังคมและเป็นมิตรต่อสิ่งแวดล้อม เพื่อส่งต่อความสุข รอยยิ้ม สู่สังคม จากรุ่นสู่รุ่น "
        </Center>
        </HStack>


        <Divider space="2.5" mt="10" px="10" />
        <Heading size="md" mt="2" px="5" >เกี่ยวกับเรา</Heading>
        
        {/* เรามุ่งมั่นเพื่อเป็นบริษัทชั้นนำระดับโลก ในการแปรรูปผลิตภัณฑ์จากอ้อยอย่างครบวงจร ด้วยนวัตกรรมและเทคโนโลยีที่มีมาตรฐาน บริหารงานโดยยึดหลักของคุณธรรม ความซื้อสัตย์ คุณภาพและความยั่งยืน โดยคำนึงถึงความรับผิดชอบต่อสังคมและเป็นมิตรต่อสิ่งแวดล้อม เพื่อส่งต่อความสุข รอยยิ้ม สู่สังคม จากรุ่นสู่รุ่น */}
      
        <Image source={require("../assets/trrweight.png")}
        style={{
          height: 120, 
          width: 80,
          borderRadius: 10,
          alignSelf: "center",
          top: 20
        }}>
        </Image>

      <HStack space={2} alignItems="center" justifyContent={"center"} paddingTop={5} >
          <Center bg="#86754e" width={270} height={70} borderRadius={10} _text={{color: "#FFFFFF"}} >
          จากโรงงานน้ำตาลเอกชนแห่งแรกของไทย
          เราพัฒนาอย่างต่อเนื่องจากรุ่นสู่รุ่น
          </Center>
        </HStack>

      <Image source={require("../assets/quality.png")}
      style={{
        height: 120, 
        width: 175,
        alignSelf: "center",
        top: 20
      }}>
      </Image>

    <HStack space={2} alignItems="center" justifyContent={"center"} paddingTop={5} >
        <Center bg="#86754e" width={270} height={70} borderRadius={10} _text={{color: "#FFFFFF"}}>
        เราพิถีพิถันใส่ใจในทุกรายละเอียด
        เพื่อให้ได้น้ำตาลคุณภาพที่ดีที่สุด
        </Center>
      </HStack>

      <Image source={require("../assets/heart.png")}
      style={{
        height: 90, 
        width: 180,
        alignSelf: "center",
        top: 20
      }}>
      </Image>

    <HStack space={2} alignItems="center" justifyContent={"center"} paddingTop={5} >
        <Center bg="#86754e" width={270} height={70} borderRadius={10} _text={{color: "#FFFFFF"}} >
        เพื่อส่งมอบความหวานและความสุข
        ให้กับทุกคน เพราะเราเชื่อว่า
        "ความหวาน คือ รสชาติแรกของความสุข"
        </Center>
      </HStack>

      <Divider space="2.5" mt="10" px="10" />
        <Heading size="md" mt="2" px="5" >ติดต่อเรา</Heading>

      <HStack space={2} alignItems="center" justifyContent={"center"} paddingTop={5} >
        <Center bg="#FFFFFF" width={400} height={70} borderRadius={10} _text={{color: "#091E40"}}>
        สำนักงานใหญ่กลุ่มไทยรุ่งเรือง
        794 อาคารไทยรวมทุน ถนนกรุงเกษม แขวงวัดโสมนัส เขตป้อมปราบศัตรูพ่าย กรุงเทพฯ 10100 เบอร์โทร : +66 2282 2022 Email: CustomerService@TRRsugar.com
        </Center>
        
      </HStack>
      <Stack direction="row" mb="10" mt="1.5" space={15}>
        </Stack>
        <Divider />

      {/* <Image source={require("../assets/trrweight.png")}
      style={{
        height: 120, 
        width: 80,
        borderRadius: 10,
        alignSelf: "center",
        top: 50,
      }}>
      </Image>

      <Text style={{
        paddingTop: 60,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>จากโรงงานน้ำตาลเอกชนแห่งแรกของไทย</Text>

      <Text style={{
        paddingTop: 2,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>เราพัฒนาอย่างต่อเนื่องจากรุ่นสู่รุ่น</Text>

      <Image source={require("../assets/quality.png")}
      style={{
        height: 100, 
        width: 160,
        borderRadius: 10,
        alignSelf: "center",
        top: 50,
      }}>
      </Image>

      <Text style={{
        paddingTop: 60,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>เราพิถีพิถันใส่ใจในทุกรายละเอียด  </Text>

      <Text style={{
        paddingTop: 2,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>เพื่อให้ได้น้ำตาลคุณภาพที่ดีที่สุด</Text>

      <Image source={require("../assets/heart.png")}
      style={{
        height: 70, 
        width: 130,
        borderRadius: 10,
        alignSelf: "center",
        top: 50,
      }}>
      </Image>

      <Text style={{
        paddingTop: 60,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>เพื่อส่งมอบความหวานและความสุข </Text>

      <Text style={{
        paddingTop: 2,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>ให้กับทุกคน เพราะเราเชื่อว่า</Text>

      <Text style={{
        paddingTop: 2,
        alignItems: "center",
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 15

      }}>"ความหวาน คือ รสชาติแรกของความสุข"</Text> */}



</View>
</ScrollView>
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
            <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={"#091E40"} />
          ),
        }}
      />
      <Tab.Screen name="รายงาน CCS"
        component={Report}
        onPress={()=>navigation.navigate("Report")}
        options={{ 
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons name={focused ? 'document' : 'document-text-outline'} size={size} color={"#091E40"} />
          ),
        }}
      />
      <Tab.Screen name="Profile"
        component={Profile}
        onPress={()=>navigation.navigate("Profile")}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
              <Ionicons name={focused ? 'person' : 'person-outline'} size={size} color={"#091E40"} />
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
    borderColor: '#091E40',
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