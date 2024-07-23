import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser'; // apne server se user ke browser me cookies access kar pau aur use set kar pau
import userRoutes from './routes/userRoutes.js'
import {notFound,errorHandler} from './middlewares/errorMiddleware.js'


const app=express();

app.use(cors({
    origin:'*',


}));



app.use(express.json({limit:'16kb'}));   // i will accept json 
app.use(express.urlencoded({extended:true,}))  // data can come from url and the special character has special value so we have to used urlencoded 

app.use(express.static("public")) // assts like images which is basically static  which i want to be uploaded on server , so need this configuraion , here public is my folder name but you can also give other folder name in which you hav static files

app.use(cookieParser());




app.use('/api/user',userRoutes)

app.use(notFound);
app.use(errorHandler)


app.get('/',(req,res)=>{

  res.send("shubhamfhfh");
})






export {app} 