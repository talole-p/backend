const mongoose= require("mongoose")

const ContactSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    massege:{
        type:String,
        require:true,
        unique:true,
    }
})

// create collection using  model


const Contact = new mongoose.model('Contact',ContactSchema)

module.exports= Contact;