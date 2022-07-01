const express= require("express");
const app = express();
const http = require('http');
require('dotenv').config();
require("./DB/conn")

// set port 
const Port= process.env.PORT||5000;
// store router 
const routes= require('./routes/index')

app.use(express.json());
// here set router
app.use(routes.registration);
app.use(routes.short)

app.set('port', Port);
const server = http.createServer(app);

// create server
server.listen(Port,(req,res)=>{
    console.log(`${Port} Port activate successfully`)
});
