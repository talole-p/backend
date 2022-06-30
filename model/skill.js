const mongoose= require("mongoose")

const SkillSchema= new mongoose.Schema({
    css:{
        type:String,
        unique:true
    },
    html:{
        type:String,
        unique:true
    },
    java_script:{
        type:String,
        unique:true
    },
    react:{
        type:String,
        unique:true
    },
    nodejs:{
        type:String,
        unique:true
    },
    expressjs:{
        type:String,
        unique:true
    },
    mongodb:{
        type:String,
        unique:true
    },
    restapi:{
        type:String,
        unique:true
    },
    figma:{
        type:String,
        unique:true
    },
    git:{
        type:String,
        unique:true
    },
    https:{
        type:String,
        unique:true
    },
    visualstudio:{
        type:String,
        unique:true
    },
}

)
const Skill = new mongoose.model("Skill",SkillSchema)
module.exports = Skill;
