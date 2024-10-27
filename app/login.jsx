import React from "react";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../constants/style"
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";


const Login = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation()

  const checkLoginValid = async() =>{
    console.log(process.env.EXPO_PUBLIC_BACKEND_URL)
    axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/login`, {username,password}).then((res)=> console.log(res.data)).catch(e=> console.log(e))
    
    
  }


  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Text style={styles.loginText}>LOG IN</Text>
      <View style={styles.inputContainer}>
        <Text>username: </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter username'
          onChangeText={(usernameInput) => setusername(usernameInput)}
          defaultValue={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={(passwordInput) => setPassword(passwordInput)}
          defaultValue={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={checkLoginValid}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
