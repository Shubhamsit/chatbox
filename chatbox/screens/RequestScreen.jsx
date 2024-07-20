import React from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";


const users = [
  {
    id: "1",
    name: "Luffy",
    message: "Kaizoku ni ore na naru",
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/105/6/532/one-piece-gear-5th-monkey-d-luffy-hd-wallpaper-preview.jpg",
    time: "12:45 PM",
  },
  {
    id: "2",
    name: "Zoro",
    message: "I am a racist",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7qFx5FcK4XCfb0_DX7bX-tb1q-nUoG3ncwA&usqp=CAU",
    time: "11:30 AM",
  },
  {
    id: "3",
    name: "Sanji",
    message: "Nami Chuannnn",
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/367/383/784/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg",
    time: "09:15 AM",
  },
  {
    id: "4",
    name: "Nami",
    message: "Moneyy",
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/932/23/657/illustration-artwork-digital-art-fan-art-drawing-hd-wallpaper-preview.jpg",
    time: "09:15 AM",
  },
  {
    id: "5",
    name: "Robin",
    message: "Gigantesco Mano",
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/819/349/264/one-piece-nico-robin-roronoa-zoro-anime-wallpaper-preview.jpg",
    time: "09:15 AM",
  },
  {
    id: "6",
    name: "Hancock",
    message: "Luffyyyy!! I love you!!",
    avatar:
      "https://c4.wallpaperflare.com/wallpaper/756/95/804/anime-girls-boa-hancock-hd-wallpaper-preview.jpg",
    time: "09:15 AM",
  },
];

const RequestScreen = () => {
  return (
    <View style={styles.container}>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Image source={{ uri: item.avatar }} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.acceptButton}>
                <Icon name="check-square" style={[styles.buttonText]}></Icon>
              </TouchableOpacity>
              <TouchableOpacity style={styles.declineButton}>
                <Icon name="x-square" style={[styles.buttonText, ]}></Icon>
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
    padding:10,
    borderRadius: 10,
    marginLeft: 3.5,

  },
  buttonText: {
    color: "white", // White text
    fontSize: 20
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
