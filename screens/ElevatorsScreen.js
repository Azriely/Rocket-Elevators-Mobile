import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";


export default function ElevatorsScreen({ navigation }) {

  const [elevators, setElevators] = useState([
    {id: 1, status: "active"},
    {id: 2, status: "active"},
    {id: 3, status: "inactive"},
    {id: 4, status: "intervention"},
]) 

  const pressBackHandler = () => {
    navigation.goBack()
  }

  
  return (

    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{fontSize: 25}}> Elevators List </Text>
        </View>

          {elevators.map(e => {
              return <TouchableOpacity key={e.id} style={styles.elevatorItem} onPress={() => {
                navigation.navigate('Elevator', e)
              }}><Text >Elevator {e.id} - Status: {e.status}</Text></TouchableOpacity> 
          })}
        
          
        
        <TouchableOpacity style={styles.loginBtn} onPress={pressBackHandler}>
          <Text style={styles.loginText}>Back</Text>
        </TouchableOpacity>

    </View>

  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title: {
        position: "absolute",
        fontSize: 25,
        top: 100,
    },
    elevatorItem: {
        backgroundColor: "#0275d8",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: 'center',
    },
    loginBtn: {
      width: "25%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#e0e0eb",
    },
  });
  
