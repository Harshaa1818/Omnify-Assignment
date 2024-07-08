
import { User } from "../models/user.model.js";

const homepage=(req,res)=>{
    const userId = req.id;

    const user=User.findById(userId);

    

    res.json({})

    

}
const login=(req,res)=>{
    const {email,password}=req.body;

    const user=User.find({email})

    if(!user){
        res
        .statuscode(402)
        .json({message: "Invalid Email address"})
    }

    const ComparePassword=user.ComparePassword(password);

    if(!ComparePassword){
        res
        .statuscode(404)
        .json({message: "Invalid Password"})

    }
    
    const AccessToken=user.GenerateAccessToken();

    res
    .statuscode(201)
    .cookies({AccessToken})
    .json({message:"Log In sucessful"})


}


const register=(req,res)=>{
    const {email,password}=req.body;

    if(!username || !password){
        res
        .statuscode(404)
        .json({message:"All fields are necessary"})
    }

  


    const existingUser=User.find({email});

    if(existingUser) {
        res
        .statuscode(400)
        .json({message:"email Id already exist, please login"})
    }

    User.create({email,password})

    res
    .statuscode(201)
    .json({message:" User registered successfully"})


}
const friendList=(req,res)=>{

}

export {homepage,login,register,friendList}