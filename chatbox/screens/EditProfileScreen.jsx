import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, Image, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfileScreen = ({ route, navigation }) => {
  const { currentName, currentAbout, currentPhoneNumber, currentProfileImage, onSave } = route.params;
  const [name, setName] = useState(currentName);
  const [about, setAbout] = useState(currentAbout);
  const [phoneNumber, setPhoneNumber] = useState(currentPhoneNumber);
  const [profileImage, setProfileImage] = useState(currentProfileImage);

  const handleChoosePhoto = () => {
    launchImageLibrary({}, response => {
      if (response.assets && response.assets.length > 0) {
        setProfileImage(response.assets[0].uri);
      }
    });
  };

  const handleEditPhoto = () => {
    Alert.alert(
      "Change Profile Photo",
      "Would you like to change your profile photo?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Change Photo", onPress: handleChoosePhoto }
      ]
    );
  };

  const handleSave = () => {
    onSave(name, about, phoneNumber, profileImage);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.profileImage}
          source={{ uri: profileImage }}
        />
        <TouchableOpacity style={styles.editIconContainer} onPress={handleEditPhoto}>
          <Icon name="edit" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.label}>About</Text>
      <TextInput
        style={styles.input}
        value={about}
        onChangeText={setAbout}
      />
      <Text style={styles.label}>Phone Number</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleSave}>
      <Text style={styles.buttonText}>Save</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#D6E6F2',
  },
  imageContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  editIconContainer: {
    position: 'absolute',
    right: 30,
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 15,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#1A3636',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },

  button: {
    backgroundColor: '#1A3636',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditProfileScreen;
