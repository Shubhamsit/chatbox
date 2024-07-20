import React from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';

const ChatListScreen = ({ navigation }) => {
  const chats = [
    { id: '1', name: 'Luffy', message: 'Kaizoku ni ore na naru', time: '12:45 PM', avatar: 'https://i.pinimg.com/736x/87/69/f8/8769f869b449f860ec1602e2d9c4a524.jpg' },
    { id: '2', name: 'LavKush', message: 'Chai pio biscuit khaoo', time: '11:30 AM', avatar: 'https://static.wikia.nocookie.net/taarakmehta/images/1/16/D37C4A6A-44EE-4C42-B618-76A4A07030DD.jpeg/revision/latest?cb=20220404185912' },
    { id: '3', name: 'AntriX', message: 'I am a racist', time: '09:15 AM', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qFx5FcK4XCfb0_DX7bX-tb1q-nUoG3ncwA&usqp=CAU' },
    { id: '4', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://wallpaperbat.com/img/116287-lionel-messi-argentina-captain-wallpaper-hd-desktop-and-mobile.jpg' },
    { id: '5', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '6', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '7', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '8', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '9', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '10', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '11', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '12', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '13', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '14', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '15', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '16', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '17', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '18', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '19', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '20', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    { id: '21', name: 'Messi', message: 'Thanks Grandma', time: '09:15 AM', avatar: 'https://via.placeholder.com/50' },
    // Add the "Know More" section
    { id: '22', type: 'knowMore' },
  ];

  const renderItem = ({ item }) => {
    if (item.type === 'knowMore') {
      return (
        <View style={styles.knowMoreContainer}>
          <Text style={styles.knowMoreText}>Know More</Text>
        </View>
      );
    }
    return (
      <TouchableOpacity style={styles.chatContainer} onPress={() => navigation.navigate('chatscreen')}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.chatDetails}>
          <Text style={styles.chatName}>{item.name}</Text>
          <Text style={styles.chatMessage}>{item.message}</Text>
        </View>
        <Text style={styles.chatTime}>{item.time}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        
        <FlatList
          data={chats}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          style={styles.chatsList}
        />
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatsList: {
    padding: 20,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatDetails: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  chatMessage: {
    fontSize: 14,
    color: '#888',
  },
  chatTime: {
    fontSize: 12,
    color: '#888',
  },
  addIcon: {
    paddingLeft: 30,
    paddingTop: 10,
  },
  knowMoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
  },
  knowMoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
  },
});

export default ChatListScreen;
