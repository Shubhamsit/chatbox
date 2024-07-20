
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 4000);
  }, [navigation]);

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
    backgroundColor: '#fff',
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
