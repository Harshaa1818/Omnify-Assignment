
import { User } from "../models/user.model.js";



const homepage=(req,res)=>{
    const userId = req.id;

    const user=User.findById(userId);

    

    res.json({})

    

}


const login=async(req,res)=>{

    try {
        const { email, password }=req.body;

        const user=await User.findOne({ email })

        

        
    
        if(!user){
            return res
            .status(402)
            .json({message: "Invalid Email address"})
        }
        const isPasswordValid = await user.isPasswordCorrect(password)
    
        if(!isPasswordValid){
            return res
            .status(404)
            .json({message: "Invalid Password"})
    
        }
        
        const AccessToken=await user.GenerateAccessToken();

        //console.log(AccessToken);

        const options = {
            httpOnly: true,
            secure: true
        }
    
        return res
        .status(201)
       // .cookie("AccessToken", AccessToken, options )
        .json({message:"Log In sucessful", AccessToken:AccessToken})
    } 
    
    catch (error) {
        res
        .status(500)
        .json({message:`Internal server error ${error}`})
    }
  


}


const register=async(req,res)=>{

    try{

    const {email, password}=req.body;

    if(!email || !password){
        return res
        .status(404)
        .json({message:"All fields are necessary"})
    }

  


const existingUser = await User.find({ email });

console.log(existingUser);

if (existingUser.length > 0) {
    return res
        .status(400)
        .json({ message: "Email ID already exists, please login" });
}
    const CreateUser=await User.create({ email, password })

    if(!CreateUser){
        return res
        .status(400)
        .json({message:"User registration failed"})
    }

      return res
      .status(201)
      .json({ message:" User registered successfully" })
}

catch(err){
    return res
    .status(500)
    .json({message:"Internal server error"})


}
}

const getAllUsers=async(req,res)=>{
    try{
        
      const user=await  User.find({})

      return res
        .status(200)
        .json({message:"All users",user})

        
        

    }
    catch(err){
        return res
        .status(500)
        .json({message:"Internal server error"})
    }

}
const getFriendList=async(req,res)=>{
    try{
        const userId=req.id;

        const user=await User.findById(userId);
        const friends=user.friends;


        return res
        .status(200)
        .json({message:"All friends", friends})
    }
    catch(err){
        return res
        .status(500)
        .json({message:"Internal server error"})
    }
}

const addFriend=async(req,res)=>{
    try{
        const userId=req.id;
       // console.log(userId);
       //console.log(user);

        const friendId=req.body.friendId;
       // console.log(friendId);

         const user=await User.findById(userId);

         const friend=await User.findById(friendId);

         console.log(friend);
        
            user.friends.push(friend);

            await user.save();

            //console.log(user);


         

            //await user.friends.push(friend);
         

            //await user.save();

         return res.status(200).json({message:"Friend added successfully",user})
    }
    catch(err){
        return res
        .status(500)
        .json({message:"Internal server error"})
    }

}

const logout=async(req,res)=>{
    try{
        res.clearCookie("AccessToken")
        return res
        .status(200)
        .json({message:"Logout successful"})
    }
    catch(err){
        return res
        .status(500)
        .json({message:"Internal server error"})
    }
}

const generateToken=async(req,res)=>{
try{
    const email =req.body.email;
    const user=await User.findOne({ "email": email })
    
    const token= user.GenerateAccessToken();

    console.log(token);

    

    

    return res
    .status(200)
    .json({token});
}
catch(err){
    return res
    .status(500)
    .json({message:"Internal server error"})

}
}

export {homepage,login,register,getAllUsers, addFriend, logout, generateToken, getFriendList}