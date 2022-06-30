const mongoose= require("mongoose")

const EmailRegistrationSchema= new mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
})

// create collection using  model


const registration = new mongoose.model('registration',EmailRegistrationSchema)

module.exports= registration;