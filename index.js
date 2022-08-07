const express = require("express");
const app = express();
const userRoute=require('./Routes/UserRoute')
const connectDb = require("./Config/connectDb");
require("dotenv").config({ path: "./Config/.env" });
const port =process.env.PORT ||6000;
console.log(process.env.PORT)
app.listen(port,(err)=>{
  (err)?console.log('server is failed'):console.log(`server is running on port ${port}`)
})
connectDb();
//Midelware globale
app.use(express.json())
app.use('/api',userRoute)

