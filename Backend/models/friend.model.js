import mongoose, { Schema } from "mongoose";
import { friendList } from "../controllers/user.controller";

const friendSchema=new mongoose.Schema({
    email:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    password:{
        type:Schema.Types.ObjectId,
        ref:"User",
    }
},{timestamps:true});

export const friendList=mongoose.model("Friend",friendSchema);