import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export const Content = () => {
  return(
  <SafeAreaView className='flex-1 px-5 py-3'></SafeAreaView>
  )
};


export function Prayerbox() {
  return (
    <View>
      <Text>prayerbox</Text>
    </View>
  )
}