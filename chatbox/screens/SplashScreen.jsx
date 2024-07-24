
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios';

const SplashScreen = ({ navigation }) => {


  const getToken = async () => {
    try {
      return await AsyncStorage.getItem('userToken');
    } catch (e) {
      console.error('Failed to fetch token.', e);
    }
  };

  const checkToken = async () => {
    let token = await getToken();
    if (token) {

      console.log("token found");


      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }


      try {


        const response = await axios.get("http://192.168.83.1:4000/api/users/jwt", config)

        console.log(response.data.sucess);
        if (response.data.sucess) {
          navigation.replace('bottomtabs');
        }
        else {
          navigation.replace('login');
        }

      } catch (error) {

        console.log(error.message);
        console.error("Error response data:", error.response.data.sucess);
        // console.error("Error response status:", error.response.status);
        // console.error("Error response headers:", error.response.headers);
        navigation.replace('login')


      }

    }

    else {
      console.log("token not found in local storage");
      navigation.replace('login')
    }
  }


  useEffect(() => {
    const handleAnimationAndNavigation = async () => {
  
      await new Promise(resolve => setTimeout(resolve, 3000)); // Animation duration


      // Perform token check and navigation after animation
      await checkToken(); // Call checkToken to handle navigation based on token
    };

    handleAnimationAndNavigation();
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={{
          from: {
            rotate: '0deg',
            scale: 1,
          },
          to: {
            rotate: '720deg',
            scale: 2,
          }
        }}
        duration={3000}
        easing="ease-out"
        iterationCount={1}
        style={styles.logoContainer}
      >
        <Image
          source={require('../assets/chatlogo.png')}
          style={styles.logo}
        />
      </Animatable.View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4FED9',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },

});

export default SplashScreen;
