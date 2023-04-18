import React from 'react';
import { View, StyleSheet, Text,Image ,TouchableOpacity , Button} from 'react-native';
import { SafeAreaView } from 'react-native';
import MaterialButtonDark from "../components/MaterialButtonDark";



export default function HomeScreen({navigation}) {
    return (
        <SafeAreaView style={styles.home}>
            <Text style={styles.title}>Driver</Text>
              <View style={styles.part}>
                    <View style={styles.container}>
                    <MaterialButtonDark
                          caption="Ajout une Opperation"
                          style={styles.materialButtonDark}
                          onPress={() => navigation.navigate('Ajoute')}
                        />
                      </View>
                      <View style={styles.container}>
                        <MaterialButtonDark
                          caption="Recherche une Opperation"
                          style={styles.materialButtonDark}
                          onPress={() => navigation.navigate('Recherche')}
                        ></MaterialButtonDark>
                      </View>
                      <View style={styles.container}>
                        <MaterialButtonDark
                          caption="Etat general"
                          style={styles.materialButtonDark}
                          onPress={() => navigation.navigate('Etat')}
                        ></MaterialButtonDark>
                      </View>
                      <View style={styles.container}>
                        <MaterialButtonDark
                          caption="Archives"
                          style={styles.materialButtonDark}
                          onPress={() => navigation.navigate('Profile', { name: 'Jane' })}
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
            marginTop:'50%',
            borderTopLeftRadius:'150%',
            paddingTop:"40%"
          },image:{
            position:'absolute',
            height:'30%',
            width:"105%",
            marginTop:'30%'
          },title:{
            position:"absolute",
            color: 'black',
            fontSize: '50%',
            marginLeft:"30%",
            marginTop:'10%'
          }, materialButtonDark: {
            height: 66,
            width: 295,
            marginLeft:"15%",
            backgroundColor: "rgba(19,19,16,1)",
            borderRadius: 100,
            marginTop:"5%"
          }
       
        
    });
    

/*

    <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigation.navigate('Profile', {name: 'Jane'})
        }
      />
            <Button
        title="ajout"
        onPress={() =>
          navigation.navigate('ajoute')
        }
      />

*/