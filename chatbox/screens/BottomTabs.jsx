import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import ChatListScreen from "./ChatListScreen";
import ProfileScreen from "./ProfileScreen";
import { View, Text, TouchableOpacity } from "react-native";

import RequestScreen from "./RequestScreen";
import Constants from 'expo-constants';
const { extra } = Constants.expoConfig;


const Tab = createBottomTabNavigator();

export default function BottomTabs({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Chats") {
            iconName = "chatbox-ellipses";
          } else if (route.name === "Requests") {
            iconName = "archive";
          } else if (route.name === "Profile") {
            iconName = "person";
          }
          return <Ionicons name={iconName} size={size + 3} color={color} />; // Increase the size by 10
        },
        tabBarLabel: ({ focused }) => {
          let label;
          if (route.name === "Chats") {
            label = "Chats";
          } else if (route.name === "Requests") {
            label = "Requests";
          } else if (route.name === "Profile") {
            label = "Profile";
          }
          return (
            <Text
              style={{
                color: focused ? "white" : "gray",
                fontSize: 13,
                fontWeight: "500",
              }}
            >
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey",
        // tabBarLabelStyle: {
        //   fontSize: 5,
        //   fontWeight: '600',
        // },
        tabBarStyle: {
          paddingBottom: 6,
          paddingTop: 5,
          height: 60,
          borderTopWidth: 0,
          backgroundColor: "#1A3636",
        },
      })}
    >
      <Tab.Screen
        name="Chats"
        component={ChatListScreen}
        options={{
          headerShown: true,
          title: "  Chat List",
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="person-add-sharp"
                style={{ fontSize: 25, marginRight: 30, color: "white" }}
                onPress={() => navigation.navigate("alluser")}
              />
            </TouchableOpacity>
          ),
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
        }}
      />

      <Tab.Screen
        name="Requests"
        component={RequestScreen}
        options={{
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
          title: "  Pending Requests",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
          title: "  My Profile",
        }}
      />
    </Tab.Navigator>
  );
}
