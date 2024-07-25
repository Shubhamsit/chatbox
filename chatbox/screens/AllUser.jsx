import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Alert,
} from "react-native";
import { Avatar, IconButton, Snackbar } from "react-native-paper";
import axios from "axios";
import { AuthContext } from "../AuthContext";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const { userId } = useContext(AuthContext);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [requestsSent, setRequestsSent] = useState({});
  const [data, setData] = useState([]);
  const [friendId, setFriendId] = useState(null);

  const fetchAllUser = useCallback(async () => {
    try {
      const response = await axios.get(
        `http://192.168.83.1:4000/api/users/allusers/${userId}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchAllUser();
    }, [fetchAllUser])
  );

  useEffect(() => {
    if (friendId) {
      addToFriend();
    }
  }, [friendId]);

  const addToFriend = async () => {
    try {
      const response = await axios.post(
        "http://192.168.83.1:4000/api/users/addfriend",
        {
          friendId,
          userId,
        }
      );
      Alert.alert(response.data.message);
    } catch (error) {
      Alert.alert(error.response?.data?.message || "An error occurred");
    }
  };

  const handlePress = (_id) => {
    setFriendId(_id);
    setRequestsSent((prev) => ({ ...prev, [_id]: true }));
    setSnackbarVisible(true);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Avatar.Image size={50} source={{ uri: item.avtar }} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.username}</Text>
        <Text style={styles.message}>{item.about}</Text>
      </View>
      {requestsSent[item._id] ? (
        <IconButton
          icon="check"
          color="#1A3636"
          size={30}
          style={styles.checkIcon}
          onPress={() => handlePress(item._id)}
        />
      ) : (
        <IconButton
          icon="plus"
          color="black"
          size={30}
          onPress={() => handlePress(item._id)}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
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
    backgroundColor: "#fff",
  },
  itemContainer: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontWeight: "bold",
  },
  message: {
    color: "#666",
  },
  checkIcon: {
    backgroundColor: "transparent",
  },
});
