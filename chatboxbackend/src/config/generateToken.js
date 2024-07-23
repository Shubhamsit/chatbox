import jwt from 'jsonwebtoken';

const generateToken=(id)=>{

    return jwt.sign({id},"shubham",{expiresIn:"30d"});
  
};export default generateToken;