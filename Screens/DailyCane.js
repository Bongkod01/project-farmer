import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions, Pressable, ScrollView,TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HStack, Center, FlatList, Box,Select  } from 'native-base';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors.js';
import { Button } from 'react-native';




const DailyCane = ({ navigation,route }) => {

    const [Data_d, setData_d] = useState([]);
    const [user, setUser] = useState([]);
    const [selected, setSelected] = useState("");

    // const No = [
    //   { key: '1', value: 'งวดที่ 1 ' },
    //   { key: '2', value: 'งวดที่ 2 ' }
    // ]
    
    const { info1, info2 } = useSelector((state) => ({
        info1: state.login.phone,
        info2: state.login.password,
        }));
        console.log('phone',info1)
        console.log('password',info2)
        // console.log('phone',info1)
        // console.log('password',info2)

    const [service, setService] = useState("");
    const Phone = route.params;  

    useEffect(() => {
    if (service !== "") {

        try {
    const url = `http://192.168.0.250:5000/daily?var_Period=${service}&var_Phone=${info1}`;
    console.log(url);
        axios.get(url)
            .then((res) => {
                console.log('axios res -->', res.data);
            })
            .catch((error) => {
            console.log(error);
            });
        } catch (error) {
        console.log(error);
        }
    }
    }, [info1, service]);


    const renderItem = ({ item }) => (
        <View style={styles.row} >
    
        <Text style={styles.cell}>{item.Date}</Text>
        <Text style={styles.cell}>{item.Bill}</Text>
    
        </View>
    )

    return (

        <ScrollView>
    <View style={styles.flatlist}>
    <View style={styles.header}>
        <Text style={styles.heading}>งวด</Text>
        <Text style={styles.heading}>เลขที่บิล</Text>
        <Text style={styles.heading}>เลขทะเบียน</Text>

    </View>
    <FlatList
        data={Data_d}
        keyExtractor={(item) => { item.id }}
        renderItem={renderItem}
    
    />

    </View>
    </ScrollView>
            
    )   
}

const styles = StyleSheet.create({
    picker: {
      width: 200,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
    },
    box: {
      marginHorizontal: 10,
      width: 180,
      marginVertical: 10,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#007260',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center'
    },
    boxx: {
      marginHorizontal: 10,
      width: 160,
      marginVertical: 10,
      height: 50,
      borderRadius: 5,
      backgroundColor: '#727272',
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tableHeader: {

    backgroundColor: '#cccccc',

    },
    flatlist: {
    top: 2
    },
    header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#cccccc',
    borderRadius: 10,
    borderColor: '#000000',
    padding: 20,
    borderWidth: 1,
    marginVertical: 4,
    },
    heading: {
    flex: 1,
    fontSize: 15,
    },
    row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
    marginHorizontal: 1,
    elevation: 2,
    borderRadius: 2,
    borderColor: '#000000',
    borderWidth: 1,

    padding: 15,
    backgroundColor: '#C0C0C0'
    },
    cell: {
    fontSize: 15,
    textAlign: 'left',
    flex: 1,

    },
    list: {
    backgroundColor: '#000000'
    }

});


export default DailyCane