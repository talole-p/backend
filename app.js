const express= require("express");
const app = express();
require("./DB/conn")

const Contact = require("./model/contactus")
// set port 
Port= process.env.Port||5000;
// store router 
const routes= require('./routes/index')

app.use(express.json());
// here set router
app.use('/api',routes.registration);


// create server
app.listen(Port,(req,res)=>{
    console.log(`${Port} Port activate successfully`)
});
