const mongoose= require("mongoose")

const LoginSchema = new mongoose.Schema({
        username:{
                type:String,
                required:true
        },
        password:{
            type:String,
            required:true
        }
})

const Login = new mongoose.model("Login",LoginSchema)

module.exports = Login;
