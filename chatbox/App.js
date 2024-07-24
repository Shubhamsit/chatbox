import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import SplashScreen from "./screens/SplashScreen";
import Login from "./screens/Login";
import SignUp from "./screens/Signup";
import ChatListScreen from "./screens/ChatListScreen";
import BottomTabs from "./screens/BottomTabs";
import AllUser from "./screens/AllUser";
import EditProfileScreen from "./screens/EditProfileScreen";
import ChatScreen from "./screens/ChatScreen";
import { AuthProvider } from "./AuthContext";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="signup"
        component={SignUp}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="chatlistscreen"
        component={ChatListScreen}
        options={{
          headerShown: true,
          title: "Chat List",
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={fetchAllUsers}>
              <Ionicons
                name="person-add-sharp"
                style={{ fontSize: 25, marginRight: 30, color: "white" }}
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

      <Stack.Screen
        name="bottomtabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="alluser"
        component={AllUser}
        options={{
          headerShown: true,
          title: "Add People",
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
        }}
      />

      <Stack.Screen
        name="chatscreen"
        component={ChatScreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
        }}
      />

      <Stack.Screen
        name="editprofilescreen"
        component={EditProfileScreen}
        options={{
          headerShown: true,
          title: "Edit Profile",
          headerStyle: {
            backgroundColor: "#1A3636", // Background color of the header
          },
          headerTintColor: "#fff", // Color of the back button and title
          headerTitleStyle: {
            fontWeight: "bold", // Style for the title text
          },
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
