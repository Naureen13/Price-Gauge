const mongoose=require('mongoose');
const jwt=require('jsonwebtoken'); 

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true   //removes white space
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true}); //time at which id is created will be added automatically

//generating tokens
// userSchema.methods.generateAuthToken= async function(){
//     const token=jwt.sign({_id:this._id.toString()},"mynameisnaureenandiwantthistowork"); 
//     console.log(token);
    
// } 

const User=mongoose.model('User',userSchema);
module.exports=User;