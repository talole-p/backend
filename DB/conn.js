const mongoose= require("mongoose")

 mongoose.connect("mongodb+srv://talole84:24231234@cluster0.boijg.mongodb.net/task?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
 }).then(()=>{
     console.log("Online Database connection Sucessfully")
 }).catch((err)=>{
     console.log(err)
 });

 