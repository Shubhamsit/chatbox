import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import * as Animatable from 'react-native-animatable';
import TextInputBox from './reusableComponents/TextInputBox'
import RoundedButton from './reusableComponents/RoundedButton';

const Login = () => {


    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUserName] = useState('');
    const [confPassword, setConfPassword] = useState();




    let inputUserNameProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: "white",
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '200',
        placeholder: 'Username',
        secureTextEntry: false,
        keyboardType: 'default',
        placeholderTextColor: "grey",

    }

    let inputMobileProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: "white",
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '200',
        placeholder: 'Mobile Number',
        secureTextEntry: false,
        keyboardType: 'phone-pad',
        placeholderTextColor: "grey",

    }


    let inputPasswordProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: "white",
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '200',
        placeholder: 'Password',
        secureTextEntry: true,
        keyboardType: 'default',
        placeholderTextColor: "grey",

    }


    let inputConfPasswordProps = {
        width: 320,
        height: 50,
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: "white",
        textAlign: 'left',
        fontSize: 15,
        fontWeight: '200',
        placeholder: 'Confirm Password',
        secureTextEntry: true,
        keyboardType: 'default',
        placeholderTextColor: "grey",

    }


    let loginBtnObj = {
        bgColor: 'black',
        textColor: 'white',
        width: 320,
        height: 50,
        text: 'Register',
        logo: ''
    }


    return (
        <SafeAreaView style={styles.container}>

            <Animatable.View
                animation='zoomIn'
                duration={1000}
                easing='ease-in'
                iterationCount={1}
                style={styles.logoContainer}
            >
                <Image
                    source={require('./assets/chatlogo.png')}
                    style={styles.logo}
                />
                <Text style={styles.logoText}>Chatbox</Text>
            </Animatable.View>

            <View style={styles.loginContainer}>

                <View style={{ marginBottom: 20, }}>

                    <TextInputBox textInputProps={inputUserNameProps} value={username} setValue={setUserName} />


                </View>


                <View style={{ marginBottom: 20, }}>

                    <TextInputBox textInputProps={inputMobileProps} value={mobile} setValue={setMobile} />


                </View>





                <View style={{ marginBottom: 20, }}>

                    <TextInputBox textInputProps={inputPasswordProps} value={password} setValue={setPassword} />


                </View>


                <View style={{ marginBottom: 20, }}>

                    <TextInputBox textInputProps={inputConfPasswordProps} value={confPassword} setValue={setConfPassword} />


                </View>

                <View style={{ top: 10, }}>
                    <RoundedButton btnObj={loginBtnObj} />

                </View>

                <View style={styles.registerText}>


                    <TouchableOpacity>

                        <Text style={{ color: 'grey' }}>Terms and Conditions</Text>




                    </TouchableOpacity>






                </View>

            </View>

        </SafeAreaView>
    )
}

export default Login

const styles = StyleSheet.create({

    topContainer: {
        backgroundColor: 'yellow',
    },
    logo: {
        width: 100,
        height: 100,

    },
    logoContainer: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        flexDirection: 'coloumn',
        alignItems: 'center',
        top: 70,



    },
    container: {
        flex: 1,
        paddingTop: 30,
        top: 40,
        backgroundColor: 'white'
    },
    logoText: {
        fontSize: 30,
        color: 'black',
        marginTop: 10,
        fontWeight: '500'

    },
    loginContainer: {
        flex: 1,
        backgroundColor: 'white',
        top: '13%',
        alignItems: 'center',



    },
    registerText: {
        flexDirection: 'row',
        top: 50,

    }
})