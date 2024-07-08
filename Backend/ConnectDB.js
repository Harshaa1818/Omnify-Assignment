import mongoose from "mongoose";


const ConnectDB=async()=>{
    try{
       const ConnetionInstance= await mongoose.connect("mongodb+srv://patilharshalvijay98:@cluster0.nryrncn.mongodb.net/HarshalDB")
       
       
    }
    catch{err=>console.log(err);}

   
}

export default ConnectDB;