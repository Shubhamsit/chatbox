import {
    StyleSheet,
    Text,
    View,
    Image,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";
import TextInputBox from "../reusableComponents/TextInputBox";
import RoundedButton from "../reusableComponents/RoundedButton";
import axios from "axios";

const Login = ({ navigation }) => {
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUserName] = useState("");
    const [confPassword, setConfPassword] = useState();

    let inputUserNameProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: "#3c3c3c",
        borderWidth: 3,
        backgroundColor: "#E1EBEE",
        textAlign: "left",
        fontSize: 15,
        fontWeight: "200",
        placeholder: "Username",
        secureTextEntry: false,
        keyboardType: "default",
        placeholderTextColor: "black",
    };

    let inputMobileProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: "#3c3c3c",
        borderWidth: 3,
        backgroundColor: "#E1EBEE",
        textAlign: "left",
        fontSize: 15,
        fontWeight: "200",
        placeholder: "Mobile Number",
        secureTextEntry: false,
        keyboardType: "phone-pad",
        placeholderTextColor: "black",
    };

    let inputPasswordProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: "#3c3c3c",
        borderWidth: 3,
        backgroundColor: "#E1EBEE",
        textAlign: "left",
        fontSize: 15,
        fontWeight: "200",
        placeholder: "Password",
        secureTextEntry: true,
        keyboardType: "default",
        placeholderTextColor: "black",
    };

    let inputConfPasswordProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: "#3c3c3c",
        borderWidth: 3,
        backgroundColor: "#E1EBEE",
        textAlign: "left",
        fontSize: 15,
        fontWeight: "200",
        placeholder: "Confirm Password",
        secureTextEntry: true,
        keyboardType: "default",
        placeholderTextColor: "black",
    };

    let loginBtnObj = {
        bgColor: "#1e1e1e",
        textColor: "white",
        width: 320,
        height: 50,
        text: "Register",
        logo: "",
    };

    const handleSignupSubmit = async () => {
        if (mobile && password == confPassword && username) {
            try {
                const config = {
                    headers: {
                        "content-type": "application/json",
                    },
                };

                const { data } = await axios.post(
                    "http://192.168.83.1:4000/api/user/",
                    { mobile, password, username },
                    config
                );

                console.log(data);

                if (data.sucess) {
                    console.log("sucess");
                    navigation.replace("login");
                } else {
                    console.log("user not created ");
                }
            } catch (error) {
                console.log(error);
                console.log(error.response.data);
            }
        } else {
            console.log("both passoord not matched");
        }

        console.log("inside signup submit");
    };

    return (
        <SafeAreaView style={styles.container}>
            <Animatable.View
                // animation='zoomIn'
                animation="flipInY"
                duration={1500}
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
                        textInputProps={inputUserNameProps}
                        value={username}
                        setValue={setUserName}
                    />
                </View>

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

                <View style={{ marginBottom: 20 }}>
                    <TextInputBox
                        textInputProps={inputConfPasswordProps}
                        value={confPassword}
                        setValue={setConfPassword}
                    />
                </View>

                <View style={{ top: 10 }}>
                    <RoundedButton
                        btnObj={loginBtnObj}
                        onPressFunction={handleSignupSubmit}
                    />
                </View>

                <View style={styles.registerText}>
                    <TouchableOpacity>
                        <Text style={{ color: "grey" }}>Terms and Conditions</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    topContainer: {
        backgroundColor: "yellow",
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        backgroundColor: "#D8FFEC",
        flexDirection: "row",
        justifyContent: "center",
        flexDirection: "coloumn",
        alignItems: "center",
        top: 70,
    },
    container: {
        flex: 1,
        paddingTop: 30,
        top: 40,
        backgroundColor: "#D8FFEC",
    },
    logoText: {
        fontSize: 30,
        color: "black",
        marginTop: 10,
        fontWeight: "500",
    },
    loginContainer: {
        flex: 1,
        backgroundColor: "#D8FFEC",
        top: "13%",
        alignItems: "center",
    },
    registerText: {
        flexDirection: "row",
        top: 50,
    },
});
