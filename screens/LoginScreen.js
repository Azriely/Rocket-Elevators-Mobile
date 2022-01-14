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
} from "react-native";


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  

 

  const  pressLoginHandler = async () => {
      const response = await fetch(`https://rocket-rest-ap.herokuapp.com/employee/${email}`)
      if (response.ok) {
        navigation.navigate('Elevators')
      } else {
        alert('Sorry! Only employees can access this app.')
      }
  }
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={
        require("../assets/R2.png")
        } />

      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Your Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={pressLoginHandler}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 250,
    height: 80,
    marginBottom: 40,
  },

  inputView: {
    backgroundColor: "#e0e0eb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,

    alignItems: "center",
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
  },

  loginBtn: {
    width: "25%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF0000",
  },
});