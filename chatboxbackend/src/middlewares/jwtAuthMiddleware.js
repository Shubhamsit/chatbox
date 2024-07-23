import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/apiError.js';

const jwtAuthMiddleware=(req,res,next)=>{

    // extract the jwt token from the request header

    const token =req.headers.authorization.split(' ')[1];

    if(!token) return  new ApiError(401,"unauthorised")


        try { 

            const decodedtoken=jwt.verify(token,"shubham");
            console.log(decodedtoken);

            console.log("below decoded");


            // atach this info to request object 


            req.user=decodedtoken;
         
            req.status=true;
       
          console.log(req.user);
            next();
            
        } catch (error) {
            console.log(error);
           req.statusMessage = 'Invalid token.';

        if (error.name === 'TokenExpiredError') {
            req.statusMessage = 'Token has expired.';
        }

        return res.status(406).json({ sucess: false, message: req.statusMessage });
    }

            
            
        }






export default jwtAuthMiddleware;