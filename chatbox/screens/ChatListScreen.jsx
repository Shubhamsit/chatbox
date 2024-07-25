import React, { useContext, useEffect, useState, useCallback } from 'react';
import { StatusBar, View, Text, TouchableOpacity, StyleSheet, FlatList, Image, SafeAreaView } from 'react-native';

import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { useScrollToTop } from '@react-navigation/native';

import { useFocusEffect } from '@react-navigation/native';
const ChatListScreen = ({ navigation }) => {

  const { userId } = useContext(AuthContext)
  const [chatList, setChatList] = useState();



  // const fetchAllChatList = async () => {
  //   try {

  //     console.log(userId);
  //     const response = await axios.get(
  //       `http://192.168.83.1:4000/api/users/chatlist/${userId}`
  //     );
  //     setChatList(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const fetchAllChatList = useCallback(async () => {
    try {
      console.log(userId);
      const response = await axios.get(
        `http://192.168.83.1:4000/api/users/chatlist/${userId}`
      );
      setChatList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [userId])

  // useEffect(()=>{


  //   fetchAllChatList();





  // },[userId])


  useFocusEffect(
    useCallback(() => {
      fetchAllChatList();
    }, [userId])
  );



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
        <Image source={{ uri: item.avtar }} style={styles.avatar} />
        <View style={styles.chatDetails}>
          <Text style={styles.chatName}>{item.username}</Text>
          <Text style={styles.chatMessage}>{item.about}</Text>
        </View>
        <Text style={styles.chatTime}>{ }</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>

        <FlatList
          data={chatList}
          renderItem={renderItem}
          keyExtractor={item => item._id}
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
    marginBottom: 20,
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
