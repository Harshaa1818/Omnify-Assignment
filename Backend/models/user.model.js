import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'


const userschema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userschema.methods.GenerateAccessToken=()=>{
    return jwt.sign({id:this.id},process.env.JWT_SECRET,{expiresIn:'1d'})
}

userschema.ComparePassword=(password)=>{
   return bcrypt.compare(this.password,password)
    
}
userschema.pre("save",()=>{
    if(isModified("password")){
         return bcrypt.hash(this.password,10)

    }
})

export const User=new mongoose.model('User',userschema);