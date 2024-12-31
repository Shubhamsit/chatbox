// socket.js
import { io } from "socket.io-client";
import Constants from 'expo-constants';
const { extra } = Constants.expoConfig;
export const socket = io(`http://${extra.IP}:4000`, {
    autoConnect: false, // Prevents auto-connecting
  });
