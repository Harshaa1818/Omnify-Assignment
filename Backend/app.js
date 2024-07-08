import express from 'express';
import router from './routers/user.route.js';
import cors from 'cors'

const app=express();

app.use(
    cors(
        {
        origin:'*',
        methods:['GET','POST','PUT','DELETE'],


    })
)

app.get(express.json());
app.get(express.urlencoded({extended:true}));

app.use('/api/v1/user',router);



export default app;