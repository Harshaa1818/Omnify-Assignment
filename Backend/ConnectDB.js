import mongoose from "mongoose";


const ConnectDB=async()=>{
    try{
      await mongoose.connect("mongodb+srv://patilharshalvijay98:UfC7pQmAYTUEJ6iu@cluster0.kpidazb.mongodb.net/omni")
      console.log("Database connected successfully");
      
       
    }
    catch{(err)=>{
            console.log(err);
            process.exit(1);
        
        }
    }

   
}

export default ConnectDB;