import { View, StyleSheet, Text,Image ,TextInput,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import MaterialButtonDark from "../components/MaterialButtonDark";
import { DatePickerIOS} from 'react-native';
import MaterialButtonDark2 from '../components/MaterialButtonDark2';


export default function Ajout({navigation}) {


    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [chosenDate, setChosenDate] = React.useState(new Date());
    const handleDateButtonPress = () => {
        setShowDatePicker(!showDatePicker);
   };
   const handleDateChange = (newDate) => {
    const formattedDate = new Date(newDate).toISOString().slice(0, 10);
    setChosenDate(newDate);
    setSelectedDate(formattedDate); 
    
  };
    
  const [Chargec, onChangeChargec] = React.useState('');
  const [Gasoil, onChangeGasoil] = React.useState('');
  const [RecetteNet, onChangeRecette] = React.useState('');
  const [Chargep, onChangeChargep] = React.useState('');
  const [chauffeurnet, setchauffeurnet] = React.useState('');
  const [pronet, setpronetnet] = React.useState('');
  const [newRestB, setnewRestB] = React.useState('');
  const [recceteB, setrecceteB] = React.useState('');

  useEffect(() => {
    const reccetb=Number(RecetteNet) + Number(Chargec) + Number(Chargep);
    setrecceteB(reccetb)
    const newRestB = Number(Gasoil) + reccetb;
    setnewRestB(newRestB)
    const chauffeur=newRestB/4 - Number(Chargec)
    setchauffeurnet(chauffeur);
    const pro=newRestB/4 - Number(Chargep)
    setpronetnet(pro);

    
  }, [Chargec, Gasoil, RecetteNet, Chargep]);


  
maps=  {
    date: selectedDate,
    reste_brut:Number("1000"),
    mnt_gasoil: Number("1000"),
    rectte_brute: Number("1000"),
    recette_net: Number("1000"),
    charge_chf:Number("1000"),
    charge_prt: Number("1000"),
    chaffaure: Number("1000"),
    proprietaire:Number("1000")
}

  function handleCardClick() {
      const data={date:selectedDate,
    reste_brut:Number(newRestB),
    mnt_gasoil:Number(Gasoil),
    rectte_brute:Number(recceteB),
    recette_net:Number(RecetteNet),
    charge_chf:Number(Chargec), 
    charge_prt:Number(Chargep),
    chaffaure:Number(chauffeurnet),
    proprietaire:Number(pronet)}
    alert(`Net Proprietair =  ${pronet}                     Net chauffaur  =  ${chauffeurnet}`)
    fetch('https://2691-41-140-244-97.ngrok-free.app/taximo/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
        }

    return (
        <SafeAreaView style={styles.home}>
          <View style={styles.part}>
                <View style={styles.container}>
                    <MaterialButtonDark2
                          caption="Date"
                          style={styles.materialButtonDark}
                          onPress={handleDateButtonPress}
                        />
                 </View>
                 
                {showDatePicker && (
                   <DatePickerIOS date={chosenDate} mode="date" onDateChange={handleDateChange} />
                     )}
                    <View style={{flexDirection: 'row'}}>
                      <TextInput
                            style={styles.input}
                            onChangeText={onChangeGasoil}
                            value={Gasoil}
                            placeholder="Gasoil"
                            placeholderTextColor="red"
                            />
                       <TextInput
                            style={styles.input}
                            onChangeText={onChangeRecette}
                            value={RecetteNet}
                            placeholder="Recette Net"
                            placeholderTextColor="red"
                            />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeChargep}
                            value={Chargep}
                            placeholder="Charge prtre"
                            placeholderTextColor="red"
                            />
                       <TextInput
                            style={styles.input}
                            onChangeText={onChangeChargec}
                            value={Chargec}
                            placeholder="Charge chf"
                            placeholderTextColor="red"
                            />
                    </View>
              
                <View style={styles.container1}>
                        <MaterialButtonDark
                          caption="Ajoute"
                          style={styles.materialButtonDark}
                          onPress={() => handleCardClick()}
                        ></MaterialButtonDark>
                        
                      </View>
                
          </View>
          <Image
                source={require('../assets/images/taxi.png')}
                style={styles.image}
            />
             <Text style={styles.title}>Ajoute</Text>
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
            marginTop:'40%',
            borderTopLeftRadius:'150%',
            paddingTop:"40%"
          },image:{
            position:'absolute',
            height:'30%',
            width:"105%",
            marginTop:'20%'
          },title:{
            position:"absolute",
            color: 'black',
            fontSize: '50%',
            marginLeft:"30%",
            marginTop:'5%'
          }, materialButtonDark: {
            height: 66,
            width: 295,
            marginLeft:"15%",
            backgroundColor: "rgba(19,19,16,1)",
            borderRadius: 100,
          },input: {
            backgroundColor:'white',
            borderRadius:30,
            height: 50,
            width:"45%",
            margin: 12,
            borderWidth: 1,
            marginTop:'5%',
            padding: 10,
          },container1:{
            marginTop:70,
          }
       

    });