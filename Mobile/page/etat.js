
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text,Image ,TouchableOpacity , Button} from 'react-native';
import { SafeAreaView } from 'react-native';


import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {Picker} from '@react-native-picker/picker';

export default function Etat({navigation}) {

  const [choosenLabel, setChoosenLabel] = useState(''); 
  const [choosenIndex, setChoosenIndex] = useState(0); 
  

  const [totalgasoil, settotalgasoil] = useState([]);
  const [totalchargep, settotalchargep] = useState([]);


  const [totalcheffaure, settotalcheffaure] = useState([]);
  const [totalpropritaire, settotalpropritaire] = useState([]);
  const [totalchargech, settotalchargech] = useState([]);
 


  const [taxi, settaxi] = useState([]);

  const [taxi2, settaxi2] = useState([]);

useEffect(() => {
  fetch('https://c4e8-41-141-247-212.ngrok-free.app/taximo/', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data) => {
      const uniqueData = data.reduce((acc, item) => {
        const date = new Date(item.date);
        const monthYear = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}`;
        if (!acc.some((obj) => obj.date === monthYear)) {
          acc.push({ date: monthYear });
        }
        return acc;
      }, []);
      settaxi(uniqueData);
    })
    .catch((error) => console.error('Error:', error));
}, []);




useEffect(() => {
  if (choosenLabel) {
    fetch(`https://c4e8-41-141-247-212.ngrok-free.app/taximo/?search=${choosenLabel}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        settaxi2(data);
       

        const totalpro = data.reduce((accumulator, item) => {
          return accumulator + Number(item.charge_prt);
        }, 0);

        settotalchargep(totalpro)
        
        const totalch = data.reduce((accumulator, item) => {
          return accumulator + Number(item.charge_chf);
        }, 0);
        
        settotalchargech(totalch)
        
        const totalMntGasoil = data.reduce((accumulator, item) => {
          return accumulator + Number(item.mnt_gasoil);
        }, 0);
        
        settotalgasoil(totalMntGasoil);

        const totalcheffaure = data.reduce((accumulator, item) => {
          return accumulator + Number(item.chaffaure);
        }, 0);
        
        settotalcheffaure(totalcheffaure);

        const totalpropri = data.reduce((accumulator, item) => {
          return accumulator + Number(item.proprietaire);
        }, 0);
        
        settotalpropritaire(totalpropri);

        
      })
      .catch((error) => console.error('Error:', error));
  }
}, [choosenLabel]);



    return (
        <SafeAreaView style={styles.home}>
        <View style={styles.title}>  
        <View style={styles.container}>
                
        <Icon name="calendar" style={styles.iconStyle} />
                      <Picker
                        selectedValue={choosenLabel}
                        onValueChange={(itemValue, itemIndex) => {
                          setChoosenLabel(itemValue);
                          setChoosenIndex(itemIndex);
                        }}
                      >
                        {taxi.map((taxii, index) => (            
                          <Picker.Item key={index} label={taxii.date} value={taxii.date} />
                        ))}
                </Picker>
      
      
        </View> 
        </View>
          <View style={styles.part}>
                          
                          <View style={styles.card}>
                          <Text style={{marginLeft:'10%' , fontSize: 30, color:'white'}}> Proprietair :</Text>
                          <Text style={{marginLeft:'20%' , fontSize: 20, color:'white'}}>Total Charges :</Text>
                          <Text style={{marginLeft:'60%' , fontSize: 30, color:'white'}}>{totalchargep}</Text>
                          <Text style={{marginLeft:'20%' , fontSize: 20, color:'white'}}>Rest net :</Text>
                          <Text style={{marginLeft:'60%' , fontSize: 30, color:'white'}}>{totalpropritaire}</Text>


                                                   
                          </View>
                          <View style={styles.card}>
                          <Text style={{marginLeft:'10%' , fontSize: 30, color:'white'}}>Chauffeur :</Text>
                          <Text style={{marginLeft:'20%' , fontSize: 20, color:'white'}}> Total Charges  :</Text>
                          <Text style={{marginLeft:'60%' , fontSize: 30, color:'white'}}>{totalchargech}</Text>
                          <Text style={{marginLeft:'20%' , fontSize: 20, color:'white'}}>Rest net :</Text>
                          <Text style={{marginLeft:'60%' , fontSize: 30, color:'white'}}>{totalcheffaure}</Text>
                        </View>
                        <View style={styles.card}>
                        <Text style={{marginLeft:'10%' , fontSize: 30, color:'white'}}>Gasoil :</Text>
                          <Text style={{marginLeft:'40%' , fontSize: 50, color:'white'}}>{totalgasoil}</Text>
                        </View>
                    
          </View>
          <Image
                source={require('../assets/images/taxi.png')}
                style={styles.image}
            />
            
    </SafeAreaView>
    );
    }



    const styles = StyleSheet.create({
        home:{
            flex:1,
            backgroundColor:"#f0d313"
        },part:{
          height:"100%",
          backgroundColor:'white',
          marginTop:'50%',
          borderTopLeftRadius:150,
          paddingTop:"10%"
        },image:{
          position:'absolute',
          height:'15%',
          width:"65%",
          marginTop:'10%',
          marginLeft:"40%"
        },title:{
          position:"absolute",
          width:'50%',
          marginTop:'10%',
          height:"10%"
        },select:{
          margin:'10%',
          marginLeft:'20%',
          marginBottom:'10%',
          backgroundColor:'white',
          borderRadius:30,
        }, iconStyle: {
          color: "black",
          fontSize: 20,
          position:'absolute',
        },container:{
          width:'100%',
        },card:{
          height:"23%",
          width:'90%',
          backgroundColor:"black",
          borderRadius:50,
          marginTop:4,
          marginLeft:30
        }
    });
    

    /*part:{
            height:"100%",
            backgroundColor:'white',
            marginTop:'50%',
            borderTopLeftRadius:150,
            paddingTop:"10%"
          },image:{
            position:'absolute',
            height:'15%',
            width:"65%",
            marginTop:'10%',
            marginLeft:"40%"
          },title:{
            position:"absolute",
            width:'50%',
            marginTop:'10%',
            height:"10%"
          },select:{
        margin:'10%',
        marginBottom:'10%',
        backgroundColor:'white',
        borderRadius:30,
      }, iconStyle: {
        color: "black",
        fontSize: 50,
        position:'absolute'
      },container:{
        width:'100%',
      },card:{
        height:"23%",
        width:'90%',
        backgroundColor:"black",
        marginLeft:"5O%",
        borderRadius:50,
        marginTop:"3%",
      }*/