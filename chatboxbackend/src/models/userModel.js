import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
const userModel=mongoose.Schema({

    username:{
        type:String,
        required:true,
    },

    mobile:{
        type:Number,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    avtar:{

        type:String,
    
        default: 'https://plus.unsplash.com/premium_photo-1673448391005-d65e815bd026?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    },
    about:{
        type:String,
        required:false,
        default: "busy",

    }

},

{
    timestamps:true,
}


);

userModel.pre("save",async function(next){


    

    if(!this.isModified("password"))
    {
        next();

    }
else{
    const salt= await bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password,salt)
}



} );


// userModel.methods.isPasswordCorrect= async function(password)
// {
// return await bcrypt.compare(password,this.password);

// }

const User=mongoose.model("User",userModel);
export default User;