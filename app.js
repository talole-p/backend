const express= require("express");
const app = express();
const http = require('http');
require('dotenv').config();
require("./DB/conn")
var cors = require('cors')
// set port 
const Port= process.env.PORT||5000;
// store router 
const routes= require('./routes/index')
app.use(cors())
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
