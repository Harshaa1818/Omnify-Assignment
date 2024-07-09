import express from 'express';
import cors from 'cors'

const app=express();

app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));
app.use(express.static("public"));
    
import router from './routers/user.route.js'


app.use('/api/v1/user',router);



export default app;