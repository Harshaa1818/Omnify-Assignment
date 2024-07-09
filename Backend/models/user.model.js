import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'


const userschema=new mongoose.Schema({
   
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    friends:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]
},{timestamps:true})

const key="Harshal"

userschema.methods.GenerateAccessToken= function(){
    return  jwt.sign({ _id:this._id },key,{expiresIn:'1d'})
}

userschema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}







userschema.pre("save",async function(next){
    if(!this.isModified("password")){
         return next()
    }
    
    this.password=await bcrypt.hash(this.password,10)
    next()
})

export const User=mongoose.model('User',userschema);