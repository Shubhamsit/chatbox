import dotenv from "dotenv";
import {app} from "./app.js";
import { connectDB } from "./db/index.js";
import http from 'http';
import {setupSocket} from  './socket/socket.js'

const server=http.createServer(app)
console.log("bhai yaha");

setupSocket(server);

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    server.listen(4000, () => {
      console.log(`Server is running at port:4000`);
    });
  })
  .catch((error) => {
    console.log(`mongodb connection failed!!!:: ${error}`);
  });


  

