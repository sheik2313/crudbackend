var mongoose=require("mongoose")
var crudeschema=new mongoose.Schema({
    studentname:String,
    coursename:String,
    duration:Object
})
module.exports=new mongoose.model('coursedetails',crudeschema,)