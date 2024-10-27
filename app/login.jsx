import React from "react";
import { useState } from "react";
import { Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "../constants/style"
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth"
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigation()
  const createProfile = async(response) =>{
    db().ref(`/users/${response.user.uid}`).set({username})
  }
  const registerAndGoToMainFlow = async() =>{
    if (username&&password){
      try{
        const response = await auth().createUserWithEmailAndPassword(
        username,
        password
      )
    
        if(response.user){
          await createProfile(response)
          nav.replace("Daily Prayer");
        }
      }catch(e) {
        Alert.alert("wrong")
      }
  }}

  const GoToHomePage = async() =>{
    if(username && password){
      try {
        const response = await auth().signInWithEmailAndPassword(
          username,
          password
        )
        if (response.user) {
          
          nav.replace("Daily Prayer")

        }
      } catch (e) {
        console.log(`failed to log in ${username}${password}`)
        Alert.alert("Incorrect email or password")
      }
    }
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
        <Text>Username: </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Username'
          onChangeText={(usernameInput) => setUsername(usernameInput)}
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
      <TouchableOpacity style={styles.button} onPress={GoToHomePage}>
        <Text>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
