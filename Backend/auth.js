import jwt from 'jsonwebtoken';


const verifyJWT=(req,res,next)=>{
    const token=req.headers("Authorization")?.replace("Bearer ","");

    const decodedToken=jwt.verify(token,process.env.JWT_SECRET);

    req.id=decodedToken.id;
    next();


}
export default verifyJWT;