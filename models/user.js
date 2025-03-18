const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
fullname:{
    type:String,
    require:true
},
phone:{
    type:String,
    require:true
},
email:{
    type:String,
    require:true
},
role:{
    type:String,
    require: true,
    enum:['admin','user'],
    default:'user'
},
password:{
    type:String,
    require:true
}

},{timestamps:true})

const User2 = mongoose.model("user",userSchema)

module.exports = User2