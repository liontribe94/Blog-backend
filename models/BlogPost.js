const User = require('../models/user')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    title:{
        type:String,
        require:true
    },
    snippet:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    author:{type:mongoose.Types.ObjectId,ref:'user'},
    comments:[{type:mongoose.Types.ObjectId,ref:'comment'}]

},{timestamps:true})

const BlogPost = mongoose.model("BlogPost",postSchema)

module.exports = BlogPost