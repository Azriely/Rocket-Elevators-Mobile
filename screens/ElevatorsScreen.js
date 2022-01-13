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
  ActivityIndicator,
  FlatList,
  ScrollView
} from "react-native";


export default function ElevatorsScreen({ navigation }) {

  const [isLoading, setLoading] = useState(true);
  const [elevators, setElevators] = useState([]);

  const getElevators = async () => {
    try {
      const response = await fetch("https://rocket-restapi.azurewebsites.net/elevator/inactive");
      const json = await response.json();
      setElevators(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getElevators();
  }, []);
  

  const pressBackHandler = () => {
    navigation.goBack()
  }

  
  return (

    <View style={styles.container}>
        <View style={styles.title}>
            <Text style={{fontSize: 25}}> Elevators List </Text>
        </View>

          <ScrollView>
            <View style={styles.list}>
            {isLoading ? <ActivityIndicator /> : elevators.map(e => {
                return <TouchableOpacity key={e.id} style={styles.elevatorItem} onPress={() => {
                  navigation.navigate('Elevator Status', e)
                }}><Text >Elevator {e.id} - Status: {e.status}</Text></TouchableOpacity> 
            })}</View>
          </ScrollView>

          
        
          
        
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
        // position: "absolute",
        fontSize: 25,
        alignItems:'center',
        justifyContent:'center',
        // top: 100,
    },
    list: {alignItems:'center',
    justifyContent:'center',
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
      // marginTop: 40,
      backgroundColor: "#e0e0eb",
    },
  });
  
