const express= require("express");
const app = express();
const http = require('http');
require("./DB/conn")


// set port 
Port= process.env.Port||5000;
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
