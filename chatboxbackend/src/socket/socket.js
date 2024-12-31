
import { Server } from 'socket.io';

export const setupSocket = (server) => {

  console.log("bhai inside setupSocket");
  
  const io = new Server(server, {
    cors: {
      origin: "*", 
      methods: ["GET", "POST"]
    }
  });

 
  io.on('connection', (socket) => {
    console.log("kuch aaya");
    
    console.log('User connected with socket ID:', socket.id);


    socket.on('join',(userId)=>{

      console.log("yaha tak pahucha");
      
      socket.join(userId);
      console.log("user ne room join kiya",userId);
      
    
    });

    socket.on('private-message', (newMessage) => {
      console.log("Message from frontend:", newMessage);
      console.log(newMessage.reciever);
      console.log(newMessage.sender);
      console.log(newMessage.text);
      
      
  
      // Emit the message to the specific receiver
      // socket.to(newMessage.reciever).emit('recieve-private-message', "hello");
      io.emit()
  });
  
  });

  

   
  
};

