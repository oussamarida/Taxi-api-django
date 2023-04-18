import React, {useEffect, useState} from 'react';
import {
  View,
  Text,

  StyleSheet,
  Image
} from 'react-native';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import {Picker} from '@react-native-picker/picker';

export default function Recherche({navigation}) {

  const [choosenLabel, setChoosenLabel] = useState(''); // initialize with an empty string
  const [choosenIndex, setChoosenIndex] = useState(0); // initialize with the default index, usually 0
  


    const [taxi, settaxi] = useState([]);
    const [taxi2, settaxi2] = useState([]);

    useEffect(() => {
        fetch('https://2691-41-140-244-97.ngrok-free.app/taximo/' , {
          method: 'GET',
          
        })
          .then((response) => response.json())
          .then((data) => {
            settaxi(data);
          })
          .catch((error) => console.error('Error:', error));
      }, []);
      
  
      
      useEffect(() => {
        if (choosenLabel) {
          fetch(`https://2691-41-140-244-97.ngrok-free.app/taximo/?search=${choosenLabel}`, {
            method: 'GET',
          })
            .then((response) => response.json())
            .then((data) => {
              settaxi2(data);
            })
            .catch((error) => console.error('Error:', error));
        }
      }, [choosenLabel]);

    return(
      <View style={{flex: 1 , backgroundColor:"#f0d313"}}>
        
            <View style={styles.container}>
                  <View style={styles.select}>
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
      
        <View style={styles.body}>
     
            <View style={{flexDirection: 'row',marginTop:"20%",}}>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Reste_brut :</Text>
                   {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', cfontSize: '25%', color:'red'}}>{item.reste_brut}</Text>
                      ))
                    }
          
            </View>
                
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>mnt_gasoil :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%',fontSize: '25%', color:'red'}}>{item.mnt_gasoil}</Text>
                      ))
                    }
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Rectte Brute :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', fontSize: '25%', color:'red'}}>{item.rectte_brute}</Text>
                      ))
                    }
              </View>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Rectte Net :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', fontSize: '25%', color:'red'}}>{item.recette_net}</Text>
                      ))
                    }
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Charge Chauffeur :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', fontSize: '25%', color:'red'}}>{item.charge_chf}</Text>
                      ))
                    }
              </View>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Charge Proprietair :</Text>
                   {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', fontSize: '25%', color:'red'}}>{item.charge_prt}</Text>
                      ))
                    }
              </View>
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Chauffeur :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '25%', color:'red'}}>{item.chaffaure}</Text>
                      ))
                    }
              </View>
              <View style={styles.disp}>
              <Text style={{marginLeft:'10%' , fontSize: '20%', color:'white'}}>Proprietair :</Text>
              {
                      taxi2.map((item) => (
                        <Text style={{marginLeft:'10%' , fontSize: '20%', fontSize: '25%', color:'red'}}>{item.proprietaire}</Text>
                      ))
                    }
              </View>
            </View>
      
          </View>
       
      </View>
      
      <Image
                source={require('../assets/images/taxi.png')}
                style={styles.image}
            />
    </View>
    );
    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      select:{
        margin:'10%',
        marginBottom:'10%',
        marginTop:"10%",
        backgroundColor:'white',
        borderRadius:"30%",
      }, iconStyle: {
        color: "black",
        fontSize: 80,
        position:'absolute'
      },body:{
          height:'140%',
          backgroundColor:"white",
          borderTopLeftRadius:'130%'
      },image:{
        position:'absolute',
        height:'30%',
        width:"105%",
        marginTop:'50%'
      },disp:{
          backgroundColor:"black",
          height:'70%',
          marginTop:"10%",
          marginLeft:'0%',
          width:'50%',
          borderRadius:'30%'
      }, 
      disp2:{
        backgroundColor:"white",
        height:'30%',
        marginTop:"30%",
        marginLeft:'0%',
        width:'40%',
        borderRadius:'30%'
    }
      
    });
    

      /* 
*/