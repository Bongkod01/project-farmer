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
import { ConstructionOutlined } from '@mui/icons-material';




 const DogClass_Definition = ({
     DogName: "",
     DogAge: 0,
    DogBreed: "",
     DogColor: ""
  });

  const myDog = new DogClass_Definition("Woonsen", 2, "Shiba Inu", "Orange");
  
  const onClickMe = () => {
    const dogInfoDiv = document.getElementById("dogInfo");
    dogInfoDiv.innerHTML = `
      <p><strong>Dog Name:</strong> ${myDog.DogName}</p>
      <p><strong>Dog Age:</strong> ${myDog.DogAge}</p>
      <p><strong>Dog Breed:</strong> ${myDog.DogBreed}</p>
      <p><strong>Dog Color:</strong> ${myDog.DogColor}</p>
    `;
  };
       

 const Test = () => (
     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Dog</Text>
      <Button onPress={onClickMe}> Click Me</Button>
  </View>
 );


/// fdg//



        // DogName = Woonsen
        // DogAge = 2
        // DogBreed= "Shiba Inu",
        // DogColor= "Orange"
 
    



//     const DogClass_Definition = () => {
//         const [dogInfo, setDogInfo] = useState({
//           DogName: "Woonsen",
//           DogAge: 2,
//           DogBreed: "Shiba Inu",
//           DogColor: "Orange"
//         });
      
//     const [showInfo, setShowInfo] = useState(false);
      
//         const onClickMe = () => {
//           setShowInfo(!showInfo);
//         };
      
//         return (
//           <View>
//             <Button color="#000000" title="Click Me!" onPress={onClickMe} />
//             {showInfo && (
//               <View>
//                 <Text>Name: {dogInfo.DogName}</Text>
//                 <Text>Age: {dogInfo.DogAge}</Text>
//                 <Text>Breed: {dogInfo.DogBreed}</Text>
//                 <Text>Color: {dogInfo.DogColor}</Text>
//               </View>
//             )}
//           </View>
//         );
//       };
    


//     const Test = () => {
//         return (
//           <View style={styles.container}>
//             <DogClass_Definition />
//           </View>
//         );
//       };

//     const styles = StyleSheet.create({
//         container: {
//           flex: 1,
//           justifyContent: 'center',
//           alignItems: 'center',
//         },
       
//         }
// );
      
      

export default Test