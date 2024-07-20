import React, { useState, useRef, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    TextInput,
    Pressable,
    FlatList,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Alert,
} from "react-native";
import {
    MaterialCommunityIcons,
    Ionicons,
    MaterialIcons,
    Entypo,
    Feather,
} from "@expo/vector-icons";
import EmojiSelector from "react-native-emoji-selector";
import { Chat } from "./Chat";
import { stick } from '../assert.js'



const ChatScreen = () => {


    const flatListRef = useRef(null);

    useEffect(() => {
        flatListRef.current?.scrollToEnd({ animated: true });
    });

    const dummyData = {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMxAUhf0gMOYVfgoYXhdi2WOv58JEyMMdjWw&s",
        name: "Angel Priya",
    };

    const [showEmojiSelector, setShowEmojiSelector] = useState(false);
    const [message, setMessage] = useState("");
    const [chatData, setChatData] = useState(Chat);
    const [showStickers, setShowStickers] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#f0f0f0");

    const handleSendMessage = () => {
        if (message.trim().length > 0) {
            const newMessage = {
                id: (chatData.length + 1).toString(),
                message,
                timestamp: new Date().toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                }),
                sender: "me",
            };
            setChatData([...chatData, newMessage]);
            setMessage("");
        }
    };

    const handleSendSticker = (sticker) => {
        const newMessage = {
            id: (chatData.length + 1).toString(),
            message: (
                <Image
                    source={sticker}
                    style={{ width: 100, height: 100, resizeMode: "contain" }}
                />
            ),
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
            }),
            sender: "me",
        };
        setChatData([...chatData, newMessage]);
        setShowStickers(false);
    };

    const toggleEmojiKeyboard = () => {
        setShowEmojiSelector((prev) => !prev);
        setShowStickers(false);
        if (!showEmojiSelector) {
            Keyboard.dismiss();
        }
    };

    const closeEmojiSelector = () => {
        setShowEmojiSelector(false);
    };

    const toggleStickers = () => {
        setShowStickers(!showStickers);
        setShowEmojiSelector(false);
        if (!showStickers) {
            Keyboard.dismiss();
        }
    };

    const changeBackgroundColor = () => {
        const colors = [
            "#7CB9E8",
            "#5F9EA0",
            "#A3C1AD",
            "#B2FFFF",
            "#E1EBEE",
            "#0093E9",
            "#0093E9",
            "#0093E9",
            "#0093E9"
        ];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setBackgroundColor(randomColor);
    };

    const clearChat = () => {
        setChatData([]);
    };

    const showMoreOptions = () => {
        Alert.alert("More Options", "Choose an option", [
            { text: "Cancel", style: "cancel" },
            { text: "Change Background Color", onPress: changeBackgroundColor },
            { text: "Clear Chat", onPress: clearChat },
        ]);
    };

    const makeCall = () => {
        Alert.alert("Calling", "This feature is not implemented yet.");
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView style={styles.mainContainer}>
                {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
                <View style={[styles.mainContainer, { backgroundColor }]}>
                    <View style={styles.topContainer}>
                        <View style={styles.leftIcons}>
                            <TouchableOpacity style={styles.iconPadding}>
                                <Ionicons name="arrow-back" size={24} color="white" />
                            </TouchableOpacity>
                            <Image style={styles.dp} source={{ uri: dummyData.img }} />
                            <Text style={styles.name}>
                                {dummyData.name.length <= 15
                                    ? dummyData.name
                                    : dummyData.name.substring(0, 15) + "..."}
                            </Text>
                        </View>

                        <View style={styles.rightIcons}>


                            <TouchableOpacity
                                style={styles.iconPadding}
                                onPress={showMoreOptions}
                            >
                                <MaterialIcons name="more-vert" size={24} color="white" />
                            </TouchableOpacity>
                        </View>

                    </View>

                    <FlatList
                        data={chatData}
                        ref={flatListRef}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View
                                style={[
                                    styles.messageContainer,
                                    item.sender === "me"
                                        ? styles.myMessage
                                        : styles.otherMessage,
                                ]}
                            >
                                {typeof item.message === "string" ? (
                                    <Text style={styles.messageText}>{item.message}</Text>
                                ) : (
                                    item.message
                                )}
                                <Text style={styles.timestamp}>{item.timestamp}</Text>
                            </View>
                        )}
                        contentContainerStyle={{
                            paddingHorizontal: 10,
                            paddingBottom: showEmojiSelector ? 300 : 50,
                        }}
                    />

                    {showEmojiSelector && (
                        <View style={styles.emojiContainer}>
                            <View style={styles.emojiHeader}>
                                <Text style={styles.emojiHeaderText}>Select Emoji</Text>
                                <TouchableOpacity onPress={closeEmojiSelector}>
                                    <Feather name="x" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <EmojiSelector
                                onEmojiSelected={(emoji) => {
                                    setMessage((prevMessage) => prevMessage + emoji);
                                }}
                                style={styles.emojiSelector}
                                showSearchBar={false}
                            />
                        </View>
                    )}

                    {showStickers && (
                        <View style={styles.stickerKeyboardContainer}>
                            <FlatList
                                numColumns={4}
                                data={stick}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <TouchableOpacity onPress={() => handleSendSticker(item)}>
                                        <Image style={styles.stickerImage} source={item} />
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    )}

                    <View
                        style={[
                            styles.inputContainer,
                            (showStickers || showEmojiSelector) && { marginBottom: 283 },
                        ]}
                    >
                        <Entypo
                            onPress={toggleEmojiKeyboard}
                            style={{ marginRight: 5 }}
                            name="emoji-happy"
                            size={24}
                            color="#333"
                        />

                        <TextInput
                            value={message}
                            onChangeText={(text) => setMessage(text)}
                            style={styles.input}
                            placeholder="Type Your message..."
                        />

                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={toggleStickers}>
                                <MaterialCommunityIcons
                                    name="sticker-emoji"
                                    size={30}
                                    color="#333"
                                />
                            </TouchableOpacity>
                        </View>

                        <Pressable onPress={handleSendMessage} style={styles.sendButton}>
                            <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
                        </Pressable>
                    </View>
                </View>
                {/* </TouchableWithoutFeedback> */}
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#1A3636",
      
       
    },
    mainContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight-25,
        borderWidth:0,
    },
    topContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#1A3636",
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "100%",
        borderWidth:0,
        borderColor:'yellow',
        marginTop:0,

    },
    leftIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconPadding: {
        paddingHorizontal: 8,
    },
    dp: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "white",
    },
    messageContainer: {
        backgroundColor: "#444",
        borderRadius: 13,
        padding: 10,
        marginVertical: 5,
        maxWidth: 350,
    },
    myMessage: {
        alignSelf: "flex-end",
        backgroundColor: "#002D62", 
    },
    otherMessage: {
        alignSelf: "flex-start",
        backgroundColor:"#36454F",
    },
    messageText: {
        color: "white",
        fontWeight:'500'
    },
    timestamp: {
        color: "#bbb",
        fontSize: 12,
        marginTop: 5,
        textAlign: "right",
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor:'white',
        backgroundColor: "#B2BEB5",
        paddingVertical: 10,
        zIndex: 1,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 2,
        borderColor: "#1A3636",
        borderRadius: 20,
        paddingHorizontal: 10,
        backgroundColor: "#FFF",
        marginRight: 10,
        marginLeft: 5,

    },
    iconContainer: {
        marginRight: 15
    },
    sendButton: {
        backgroundColor: "#1A3636",
        paddingVertical: 8,
        paddingHorizontal: 18,
        borderRadius: 20,
    },
    emojiContainer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#333",
        zIndex: 1,
        height: 285,
    },
    emojiHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    emojiHeaderText: {
        color: "white",
        fontSize: 16,
    },
    emojiSelector: {
        height: 250,
    },
    stickerKeyboardContainer: {
        flex: 1,
        position: "absolute",
        justifyContent: "flex-end",
        bottom: 0,
        height: 300,
        backgroundColor: "#fff",
    },
    stickerImage: {
        width: 80,
        height: 80,
        margin: 6,
    },
});

export default ChatScreen;