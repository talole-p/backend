// const express= require("express");
// const router = new express.Router();
// const Contact = require("../model/contactus")
// const Skill = require("../model/skill")
// const Login = require("../model/Login")

// // here defind the router
// router.get("/amit",(req,res)=>{
//     res.send("hello i am from Router")
// });

// router.post("/contact",async (req,res)=>{
//     try {
//         console.log(req.body)
//         const clientRes= new Contact (req.body);
//         const CreateUser= await clientRes.save();
//         res.status(200).send(clientRes)
//     } catch (error) {
//         res.status(400).send(error)
//     }


// })
// router.post("/skill",async(req,res)=>{
//     try {
//        // console.log(req.body)
//         const skillreq = new Skill(req.body);
//         const saveskilldata= await skillreq.save();
//         console.log(skillreq)
//         res.status(200).send(skillreq)
//     } catch (error) {
//         res.status(400).send(error)
        
//     }

// })
// router.patch("/skill/:id", async (req,res)=>{
//     try {
//         const update= req.params.id;
//         const updateskill = await Skill.findByIdAndUpdate(update,req.body,{
//             new:true
//         });
//         if(!update){
//             res.status(400).send()
//         }else{
//             res.status(200).send(updateskill)
//             console.log(updateskill)
//         }
        
//     } catch (error) {
//         res.status(500).send(error)
        
//     }
// })
// router.get("/skill", async (req,res)=>{
//     try {
//         const findskill= await Skill.find()
//         res.status(200).send(findskill)
//         console.log(findskill)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
 
// router.get("/contact", async (req,res)=>{
//     try {

//         const findcontact = await Contact.find()
//         res.status(200).send(findcontact)
//         console.log(findcontact)
//     } catch (error) {
//         res.status(500).send(error)
        
//     }
// })



// router.post("/login", async (req,res)=>{
//     try {
//         // here impliment logic 
//         const username= req.body.username;
//         const password = req.body.password;
//        // console.log(username)
//        // store username and password in one veriable and after that check it 
//         const savenewLogin = await Login.findOne({username:username}) 
        
//         if(savenewLogin.password==password){
//             console.log(savenewLogin)
//             res.status(200).send("login success")
//         }else{
//             res.status(500).send("password not match")
//         }
       
//     } catch (error) {
//         res.status(400).send(error)  
//         console.log(error)
//     }
// })

// router.get("/login", async(req,res)=>{
//     try {
//         const newFind = await Login.find()
//         console.log(newFind)
//         res.status(200).send(newFind)
//     } catch (error) {
//         res.status(400).send(error)
        
//     }
// })
// module.exports= router
