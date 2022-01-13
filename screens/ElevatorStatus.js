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


export default function ElevatorStatus({ navigation }) {

    const elevatorID = navigation.getParam('id');
    const elevatorStatus = navigation.getParam('status');
    let color;
    if (elevatorStatus == 'active') {
        color = 'green'
    } else color = 'red'
    const pressBackHandler = () => {
        navigation.goBack()
      }

    const pressActivateHandler = () => {
        
    }

    return (

    

    <View style={styles.container}>

        <Text style={styles.title}> Elevator {elevatorID} </Text>

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
  
