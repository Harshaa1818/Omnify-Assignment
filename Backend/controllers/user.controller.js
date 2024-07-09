
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
        .cookie("Access Token:", AccessToken, options )
        .json({message:"Log In sucessful"})
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

const friendList=(req,res)=>{

}

export {homepage,login,register,friendList}