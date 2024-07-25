import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../AuthContext";
import axios from "axios";

const RequestScreen = () => {


  const { userId } = useContext(AuthContext);
  const [userRequest, setUserRequest] = useState();
  const [status, setStatus] = useState(null);
  const [isFunctionComplete,setIsFunctionComplete]=useState(false);

  const fetchFriendRequests = async () => {
    try {

      console.log(status,"status from fetch friend request");
      const response = await axios.get(
        `http://192.168.83.1:4000/api/users/requests/${userId}`
      );

      setUserRequest(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("error while geting user", error);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    "useEffect cahala"
    fetchFriendRequests();
  }, [isFunctionComplete]);

  const respondRequest = async (requesterId, status) => {
    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };

      console.log(status,"status");

      const response = await axios.post(
        "http://192.168.83.1:4000/api/users/respondrequest",
        { userId, requesterId, status },
        config
      );

      console.log(response.data.message);
    } catch (error) {

      console.log(error);
    }

    setIsFunctionComplete((prev)=>(!prev));


  };

  return (
    <View style={styles.container}>
      <FlatList
        data={userRequest}
        keyExtractor={(item) => item.from._id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={{ uri: item.from.avtar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{item.from.username}</Text>
              <Text style={styles.message}>{item.from.about}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity
                style={styles.acceptButton}
                onPress={() => {

                  respondRequest(item.from._id, true)
                  // setStatus(true);
                
                
                }}
              >
                <Icon name="check-square" style={[styles.buttonText]}></Icon>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.declineButton}
                onPress={() =>{ 
                  respondRequest(item.from._id, false)
                  // setStatus(false);
                
                }}
              >
                <Icon name="x-square" style={[styles.buttonText]}></Icon>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default RequestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 27,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    marginTop: 25,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  listItem: {
    flexDirection: "row",
    padding: 15,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  message: {
    color: "gray",
  },
  buttons: {
    flexDirection: "row",
  },
  acceptButton: {
    backgroundColor: "#1A3636", // Green background
    padding: 10,
    borderRadius: 10,
    marginRight: 8,
  },
  declineButton: {
    backgroundColor: "#9d0208", // Red background
    padding: 10,
    borderRadius: 10,
    marginLeft: 3.5,
  },
  buttonText: {
    color: "white", // White text
    fontSize: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ddd",
    marginBottom: 25, // Adjust for Android status bar
  },
  footerButton: {
    padding: 10,
  },
  footerButtonText: {
    fontSize: 16,
  },
});
