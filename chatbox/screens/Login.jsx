import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import TextInputBox from "../reusableComponents/TextInputBox";
import RoundedButton from "../reusableComponents/RoundedButton";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../AuthContext";
import Constants from "expo-constants";
const { extra } = Constants.expoConfig;
import { socket } from "../socket.js";

const Login = ({ navigation }) => {
  const { userId, token, setToken } = useContext(AuthContext);
  console.log("inside login");

  const [mobile, setMobile] = useState("");

  const [password, setPassword] = useState("");

  const storeToken = async (mytoken) => {
    try {
      await AsyncStorage.setItem("userToken", mytoken);
      setToken(mytoken);
    } catch (e) {
      console.error("Failed to save token.", e);
    }
  };

  const socketConnction = () => {
    console.log("inside socketConnection function");

    // Connect socket
    socket.connect();

    socket.on('connect', () => {
      console.log("Connected to socket server with ID:", socket.id);
    });

    socket.emit('join', userId);

    socket.on('connect_error', (err) => {
      console.error("Socket connection error:", err);
    });
  };

  const handleLoginSubmit = async () => {
    console.log("yaha tak pahucha");

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        `http://${extra.IP}:4000/api/users/login`,
        { mobile, password },
        config
      );

      console.log(data);
      console.log(data.username, "logedin");

      if (data.sucess) {
        storeToken(data.token);
        console.log("token stord in  local storage");
        socketConnction();
        navigation.replace("bottomtabs");
      } else {
        console.log("not logedin");
      }
    } catch (error) {
      console.log(error);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    return () => {
      socket.disconnect();
      socket.off(); // Remove all listeners when component unmounts
    };
  }, []);

  let inputMobileProps = {
    width: 320,
    height: 50,
    borderRadius: 10,
    borderColor: "#3c3c3c",
    borderWidth: 3,
    backgroundColor: "white",
    textAlign: "left",
    fontSize: 15,
    fontWeight: "200",
    placeholder: "Mobile Number",
    secureTextEntry: false,
    keyboardType: "phone-pad",
    placeholderTextColor: "grey",
  };

  let inputPasswordProps = {
    width: 320,
    height: 50,
    borderRadius: 10,
    borderColor: "#3c3c3c",
    borderWidth: 3,
    backgroundColor: "white",
    textAlign: "left",
    fontSize: 15,
    fontWeight: "200",
    placeholder: "Password",
    secureTextEntry: true,
    keyboardType: "default",
    placeholderTextColor: "grey",
  };

  let loginBtnObj = {
    bgColor: "#1e1e1e",
    textColor: "white",
    width: 320,
    height: 50,
    text: "Login ",
    logo: "",
  };

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View
        animation="flipInX"
        duration={1000}
        easing="ease-in"
        iterationCount={1}
        style={styles.logoContainer}
      >
        <Image source={require("../assets/chatlogo.png")} style={styles.logo} />
        <Text style={styles.logoText}>Chatbox</Text>
      </Animatable.View>

      <View style={styles.loginContainer}>
        <View style={{ marginBottom: 20 }}>
          <TextInputBox
            textInputProps={inputMobileProps}
            value={mobile}
            setValue={setMobile}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <TextInputBox
            textInputProps={inputPasswordProps}
            value={password}
            setValue={setPassword}
          />
        </View>

        <View style={{ top: 10 }}>
          <RoundedButton
            btnObj={loginBtnObj}
            onPressFunction={handleLoginSubmit}
          />
        </View>

        <View style={styles.registerText}>
          <Text style={{ color: "grey" }}>DONT HAVE AN ACCOUNT </Text>

          <TouchableOpacity onPress={() => navigation.replace("signup")}>
            <Text style={{ color: "black" }}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: "#1d1160",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    backgroundColor: "#00BFFF",
    flexDirection: "row",
    justifyContent: "center",
    flexDirection: "coloumn",
    alignItems: "center",
    top: 100,
  },
  container: {
    flex: 1,
    paddingTop: 30,
    top: 40,
    backgroundColor: "#00BFFF",
  },
  logoText: {
    fontSize: 30,
    color: "black",
    marginTop: 10,
    fontWeight: "500",
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "#00BFFF",
    top: "20%",
    alignItems: "center",
  },
  registerText: {
    flexDirection: "row",
    top: 50,
  },
});
