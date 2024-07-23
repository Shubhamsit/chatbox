import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import generateToken from '../config/generateToken.js';
import { ApiError } from '../utils/apiError.js';
import { uploadOnCloudinary} from '../utils/cloudinary.js'

const defaultAvtar="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1721719015~exp=1721719615~hmac=9192e8c58734ad20528a67941cac06c031665557758ff57f429129fe434ac0ec"
const registerUser=  asyncHandler(async(req,res)=>{

    const {username,mobile,password}=req.body;


    console.log("register user tak pahucha");


    if(!username || !mobile || !password)
    {

        res.status(400);
        throw new Error("please Enter all fields");

    }

    const userExists=await User.findOne({mobile});
    if(userExists)
    {
        res.status(400);
        throw new Error("User already exists");
    }


 // req.files hame files ka access deta h jo multer ke pass aaya h uske baad  .lagakar avtar( hame uska name avtar diya h isliye agar aap kuch aur name doge to wahi likhna h  uske baad [0] , kyoki uske andar bahut saari properties hoti h but hame 0 index wala lene h , kyoki 1st property ke andar ek obj milta h aur agar use ham optionally(?) lekar jab .path karenge to hame uska pura path milega , jo multer ne upload kiya h )

const avtarUrl=defaultAvtar;

if(req.files && req.files.avtar && req.files.avtar[0])
{

    const avtarLocalPath= await req.files.avtar[0]?.path 


    try {

        
  const avtar= await uploadOnCloudinary(avtarLocalPath)
  console.log(avtar);
  if(avtar)
  {
    avtarUrl=avtar.url;
  }
        
    } catch (error) {


        throw new ApiError(400,"upload filed on cloudinary")
        
    }
}

    const user=await User.create({
        username,
        mobile,
        password,
        avtar:avtarUrl


    });

    // .select method ke andar ham string mke andar jo bhi value ko - (minus) ke sath likenge wo hamare res me nhi aayega jab ham db se query karenge  yaha pe maine -passsword likha h matlab response(createdUser)me password nhi aaega , ham 1 se jyada bhi value de sakte h bas hame sare values ko -(minus) sign ke sath likhna hai aur unke bich me space  dete jaana h 

    const createdUser=await User.findById(user._id).select(
        "-password"
    )                                                               

    if(createdUser)
    {
        res.status(201).json({
            _id:createdUser._id,
            username:createdUser.username,
            mobile:createdUser.mobile,
            token:generateToken(createdUser._id),
            avtarUrl:createdUser.avtar,

        });
    }
    else{

        res.status(500);
        throw new Error("Failed to create user"); 
    }



});


const authUser=asyncHandler(async(req,res)=>{

    const {mobile,password}=req.body;
    const user=await User.findOne({mobile});
    if(user && (user.isPasswordCorrect(password)))
    {
        res.json({
             sucess:true,
            _id:user._id,
            username:user.username,
            mobile:user.mobile,
            token:generateToken(user._id),

        })

    }
    else if(!user)
    {
        res.status(400);
        throw new Error("User doesnot exist"); 
    }
    else{
        res.status(400);

        throw new Error("Invalid Credentials"); 

    }
    

})


const jwtVerify = asyncHandler(async(req,res)=>{

    console.log("inside ");
    console.log(req.user);
    console.log(req.status);

    if(req.status==true)
    {
        console.log("inside req.status");
        res.json({sucess:true,})
    }
    else{
        res.json({sucess:false})
    }




})


export  { registerUser,authUser,jwtVerify};