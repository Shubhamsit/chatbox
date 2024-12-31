import mongoose from 'mongoose';
export const connectDB=async()=>{

    try {

        const connectInstance=await mongoose.connect(`mongodb+srv://shubham:shubham@cluster0.m6d9h.mongodb.net/chatbox`)

        console.log(`\n Mongodb connected!! DB HOST:${connectInstance.connection.host}`);
        
    } catch (error) {
        console.log(`mongodb connection error:${error}`);
        process.exit(1);
        
    }
}