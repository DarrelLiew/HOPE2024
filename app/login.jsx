import React from "react";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../constants/style"
import { SafeAreaView } from "react-native-safe-area-context";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { useUser } from "./UserContext";

const Login = () => {
  const { setUserId } = useUser();
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation()

  const checkLoginValid = async() =>{
    await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/login`, {username,password})
    .then(res=>{ 
      if (res.data.status =="success"){

        Alert.alert('Login Successful');
        setUserId(res.data.user_id);
        navigation.navigate("(tabs)")
      }
    })
    .catch(e=> console.log(e))
    
    
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
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text>Password: </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Password'
          onChangeText={(passwordInput) => setPassword(passwordInput)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={checkLoginValid}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
