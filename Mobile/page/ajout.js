import { View, StyleSheet, Text,Image ,TextInput,TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import MaterialButtonDark from "../components/MaterialButtonDark";
import { DatePickerIOS,DatePickerAndroid} from 'react-native';
import MaterialButtonDark2 from '../components/MaterialButtonDark2';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Ajout({navigation}) {


    const [selectedDate, setSelectedDate] = React.useState(null);
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [chosenDate, setChosenDate] = React.useState(new Date());

    const [date, setDate] = useState(new Date());


    const handleDateButtonPress = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShowDatePicker(Platform.OS === 'ios');
      setDate(currentDate);
      const formattedDate = selectedDate.toISOString().slice(0, 10);
      
      setSelectedDate(formattedDate)
    };
    


    const showMode = () => {
      setShowDatePicker(true);
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


  function handleCardClick() {
   
console.log(selectedDate)
      const data={date:selectedDate,
    reste_brut:Number(newRestB),
    mnt_gasoil:Number(Gasoil),
    rectte_brute:Number(recceteB),
    recette_net:Number(RecetteNet),
    charge_chf:Number(Chargec), 
    charge_prt:Number(Chargep),
    chaffaure:Number(chauffeurnet),
    proprietaire:Number(pronet)}
    alert(`Net Proprietair =  ${pronet}    
     Net chauffaur  =  ${chauffeurnet}`)
    fetch('https://c4e8-41-141-247-212.ngrok-free.app/taximo/', {
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
    navigation.navigate('Home')
        }

    return (
        <SafeAreaView style={styles.home}>
          
                      <View style={styles.part}>
                      <View style={styles.container}>
                      <MaterialButtonDark2
          caption="Date"
          style={styles.materialButtonDark}
          onPress={showMode}
        />
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={handleDateButtonPress}
        />
      )}

   
                    <View style={{flexDirection: 'row'}}>
                      <TextInput
                            style={styles.input}
                            onChangeText={onChangeGasoil}
                            value={Gasoil}
                            placeholder="Gasoil"
                            placeholderTextColor="red"
                            keyboardType="numeric"

                            />
                       <TextInput
                            style={styles.input}
                            onChangeText={onChangeRecette}
                            value={RecetteNet}
                            placeholder="Recette Net"
                            placeholderTextColor="red"
                            keyboardType="numeric"
                            />
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeChargep}
                            value={Chargep}
                            placeholder="Charge prtre"
                            placeholderTextColor="red"
                            keyboardType="numeric"

                            />
                       <TextInput
                            style={styles.input}
                            onChangeText={onChangeChargec}
                            value={Chargec}
                            placeholder="Charge chf"
                            placeholderTextColor="red"
                            keyboardType="numeric"

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
            borderTopLeftRadius:150,
            paddingTop:"10%"
          },image:{
            position:'absolute',
            height:'30%',
            width:"105%",
            marginTop:'0%'
          },title:{
            position:"absolute",
            color: 'black',
            fontSize: 50,
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
    
    /* <Image
    source={require('../assets/images/taxi.png')}
    style={styles.image}
/>
 <Text style={styles.title}>Ajoute</Text>*/
