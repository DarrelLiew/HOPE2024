import * as React from "react";
import { Text, View, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Prayerbox from "../../components/prayerbox";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../../constants/style";
import { StyleSheet, StatusBar } from "react-native";

export default function DailyPrayer() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Prayerbox />
    </SafeAreaView>
  );
}
