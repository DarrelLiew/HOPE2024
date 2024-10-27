import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/style";
import Prayerbox from "../../components/prayerbox";
const PrayForOthers = () => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Prayerbox />
    </SafeAreaView>
  );
};

export default PrayForOthers;
