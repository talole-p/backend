const express = require('express')

const app = express()

app.use(express.json())

Port= 3000;

app.get('/',(req,res)=>{
    res.json({
        msg: 'hosting online by Amit github CI & CD tutorial',
        msg: "restart server "
    })
})
// create server
app.listen(3000,(req,res)=>{
    console.log('3000 Port activate successfully')
});