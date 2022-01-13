import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
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


export default function ElevatorStatus({ navigation }) {


    const [elevatorStatus, setElevatorStatus] = useState(navigation.getParam('status'));
    const elevatorID = navigation.getParam('id');
    
    let color;
    if (elevatorStatus == 'active') {
        color = 'green'
    } else color = 'red'
    const pressBackHandler = () => {
      navigation.navigate('Elevators')
      }

    const pressActivateHandler = () => {
        setElevatorStatus('active')
        color = 'green'

        const data = { id: elevatorID, status: "active" };

        fetch('https://rocket-restapi.azurewebsites.net/elevator', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: data,
        })
        .then(response => response.json())
        .then(() => {
          console.log('Elevator Status is updated');
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }

 

    return (

    

    <View style={styles.container}>

        <View style={styles.elevatorItem}>
            <Text style={{fontSize: 25, color: 'black'}}> Elevator {elevatorID} </Text>
        </View>

        <View style={styles.elevatorItem}>
            <Text style={{fontSize: 25, color: color}}>  {elevatorStatus.toUpperCase()} </Text>
        </View>

        <TouchableOpacity style={styles.activateBtn} onPress={pressActivateHandler}>
          <Text style={styles.loginText}>Activate</Text>
        </TouchableOpacity>

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
        top: 200,
    },
    elevatorItem: {
        height: 45,
        marginBottom: 20,
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
    activateBtn: {
        width: "25%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#3cd070",
      },
  });
  
