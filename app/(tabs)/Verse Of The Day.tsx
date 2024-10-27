import { View, Text } from "react-native";
import React from "react";
import styles from "@/constants/style";
import { SafeAreaView } from "react-native-safe-area-context";
const VerseOfTheDay = () => {
  return (
    <SafeAreaView
      style={[
        styles.safeContainer,
        { flex: 1, paddingTop: 100, alignItems: "center" },
      ]}
    >
      <View style={styles.prayerbox}>
        <Text style={styles.header}>Jeremiah 29:11</Text>
        <Text style={styles.content}>
          For I know the plans I have for you, declares the Lord, plans for
          welfare and not for evil, to give you a future and a hope.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default VerseOfTheDay;
