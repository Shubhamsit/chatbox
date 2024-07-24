import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const StoredToken = await AsyncStorage.getItem("userToken");
        if (StoredToken) {
          const decodedToken = jwtDecode(StoredToken);
          const userId = decodedToken.id;
          setUserId(userId);
          setToken(StoredToken);
        } else {
          console.log("didnt find any token");
        }
      } catch (error) {
        console.log("error while fetching token from loval storage", error);
      }
    };

    fetchUser();
  }, [token, setToken]);

  return (
    <AuthContext.Provider value={{ token, setToken, userId, setUserId }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
