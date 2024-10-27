import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: "plum",
        },
        headerTitleStyle: {
          fontWeight: "900",
          fontSize: 24,
        },
        headerTitleAlign: "center",
      }}
    >
      {/* First tab - Daily Prayer */}
      <Tabs.Screen
        name='Daily Prayer'
        options={{
          headerTitle: "DAILY PRAYER",
          tabBarLabel: ({ focused }) => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/1.png")}
              style={{
                width: 60,
                height: 60,
                tintColor: focused ? "#433878" : "#5473FF",
              }}
            />
          ),
        }}
      />

      {/* Second tab - Pray for Others */}
      <Tabs.Screen
        name='Pray For Others'
        options={{
          headerTitle: "PRAY FOR OTHERS",
          tabBarLabel: ({focused}) => {
            return null;
          },
          tabBarIcon: ({focused}) => (
            <Image
              source={require("../../assets/images/2.png")}
              style={{ width: 60, height: 60,                 tintColor: focused ? "#433878" : "#5473FF", }}
            />
          ),
        }}
      />

      {/* Third tab - My Prayer */}
      <Tabs.Screen
        name='My Prayer'
        options={{
          headerTitle: "MY PRAYER",
          tabBarLabel: ({ focused }) => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/3.png")}
              style={{ width: 60, height: 60,                 tintColor: focused ? "#433878" : "#5473FF" }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='Verse Of The Day'
        options={{
          headerTitle: "VERSE OF THE DAY",
          tabBarLabel: ({ focused }) => null,
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/4.png")}
              style={{ width: 60, height: 60,                tintColor: focused ? "#433878" : "#5473FF"  }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
