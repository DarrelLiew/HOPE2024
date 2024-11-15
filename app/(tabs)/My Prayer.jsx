import { View, Text, Alert, Modal, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "@/constants/style";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput, Button, Pressable } from "react-native";
import { useUser } from "../UserContext";
import axios from "axios";
const MyPrayer = () => {
  const {userId} = useUser()
  // const {user_id} = route.params;
  // console.log(`user id:${user_id}`)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [text, setText] = useState("");
  
  const createPrayer = async(prayerInput) => {
    console.log(userId)
    console.log(prayerInput)
    await axios.post(`${process.env.EXPO_PUBLIC_BACKEND_URL}/myprayers/postprayer`, {
      user_id: userId ,
      prayer: prayerInput
    })

    }
  

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View>
        <Text style={[styles.header, { textAlign: "left" }]}>
          Today I would like to pray for ...
        </Text>
        <TextInput
          multiline={true}
          style={[styles.myprayerinput]}
          onChangeText={(newText) => setText(newText)}
        />
        <Pressable
          style={styles.submitprayerbutton}
          onPress={() => {
            if (text.trim() !== "") {  // Use .trim() method correctly
              setIsModalVisible(true);
            } else {
              Alert.alert("Error", "Please enter a prayer before submitting.");
            }
          }}
        >
          <Text style={styles.text}>Submit Prayer</Text>
        </Pressable>
        <Modal
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
          animationType='slide'
          presentationStyle='pageSheet'
        >
          <View style={styles.safeContainer}>
            <Text style={styles.header}>Confirm Prayer Submission?</Text>
            <Text style={styles.prayerbox}>{text}</Text>
            <View style={styles.modalButtonContainer}>
              <Button
                title='Submit'
                color='midnightblue'
                onPress={() => {
                  
                  createPrayer(text)
                  setIsModalVisible(false);
                }}
              />
              <View style={styles.buttonSpacing} />
              <Button
                title='Cancel'
                color='midnightblue'
                onPress={() => {
                  setIsModalVisible(false);
                }}
              />
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default MyPrayer;
