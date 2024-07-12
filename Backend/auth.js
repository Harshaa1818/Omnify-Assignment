import jwt from 'jsonwebtoken';
import {key} from './models/user.model.js'


const verifyJWT=async(req,res,next)=>{

    
 try {
      const token=req.body.token?.replace("token=","") || req.headers.authorization?.replace("Bearer ","");
      console.log(token);
   
      if(!token){
            return res.status(401).json({message:"No token found"})
      }
   
      const decodedToken= jwt.verify(token,key);
      req.id=decodedToken._id;
   
      next();
 } catch (error) {
        return res.status(401).json({message:"Invalid token"})
    
 }
    


}

export default verifyJWT;