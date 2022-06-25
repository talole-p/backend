const express = require('express')

const app = express()

app.use(express.json())

Port= 3000;

app.get('/',(req,res)=>{
    res.json({
<<<<<<< HEAD
        msg: 'nodejs project host on AWS EC2 using  github CI & CD hosted by Amit Talole Patil',
=======
        msg: 'nodejs project host on AWS EC2 using  github CI & CD hosted by Saurabh autade',
>>>>>>> 1977c54a9d9e710a124115d953da0afcc42b4880
    })
})
// create server
app.listen(3000,(req,res)=>{
    console.log('3000 Port activate successfully')
});