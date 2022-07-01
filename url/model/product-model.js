const mongoose= require("mongoose")

const productRegistrationSchema= new mongoose.Schema({
    url:{
        type:String,
        require:true,
    },
    shortcode:{
        type:String,   
    },
    visit:{
        type: Number,
    }
})


const product = new mongoose.model('product',productRegistrationSchema)

module.exports= product;