;
import ConnectDB from "./ConnectDB.js"
import app from './app.js';

const PORT=3000;

ConnectDB()
.then(()=>{
    app.listen(PORT,()=>console.log("Server is running on port",PORT))
})
.catch(err=>console.log(err))