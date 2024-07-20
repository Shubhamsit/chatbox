
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { Avatar, FAB, IconButton, Snackbar } from 'react-native-paper';

const data = [
  { id: '1', name: 'SAI', message: 'tera nam', image: 'https://i.pravatar.cc/50?img=1' },
  { id: '2', name: 'shubham', message: 'hdhw', image: 'https://i.pravatar.cc/50?img=2' },
  { id: '3', name: 'tushar', message: 'hgjhh', image: 'https://i.pravatar.cc/50?img=3' },
  { id: '4', name: 'antri', message: 'Moneyy', image: 'https://i.pravatar.cc/50?img=4' },
  { id: '5', name: 'kush', message: 'hlww', image: 'https://i.pravatar.cc/50?img=5' },
];

const HomeScreen = ({ navigation }) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [requestsSent, setRequestsSent] = useState({});


  const handlePress = (id) => {
    setRequestsSent((prev) => ({ ...prev, [id]: true }));
    setSnackbarVisible(true);
  };



  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Avatar.Image size={50} source={{ uri: item.image }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      {requestsSent[item.id] ? (
        <IconButton
          icon="check"
          color="#1A3636"
          size={30}
          style={styles.checkIcon}
          onPress={() => { }}
        />
      ) : (
        <IconButton
          icon="plus"
          color="black"
          size={30}
          onPress={() => handlePress(item.id)}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={Snackbar.DURATION_SHORT}
      >
        Request sent
      </Snackbar>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontWeight: 'bold',
  },
  message: {
    color: '#666',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 1,
    bottom: 0,
    backgroundColor: '#000',
  },
  checkIcon: {
    backgroundColor: 'transparent',
  },
});
