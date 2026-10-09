import mongoose from "mongoose";



const UserModel= new mongoose.Schema({

name:{
    type: String,
    required: [true,"name is require"],
    unique:[true,"name alredy exist"]
},
email:{
    type: String,
    required: [true,"email is require"],
    unique:[true,"email alredy exist"]
},
password:{
    type: String,
    required: [true,"password is require"],
}


})
const model= mongoose.model("users",UserModel)
export default model;