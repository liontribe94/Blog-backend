const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({

    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
    
},{timestamps:true})

const User = mongoose.model("user",userSchema)

module.exports = User

