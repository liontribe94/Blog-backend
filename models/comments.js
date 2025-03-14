const mongoose = require ('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({

    comment:{
        type:String,
        require:true
    },
    author:{type:mongoose.Types.ObjectId,ref:'user'},
    post:{type:mongoose.Types.ObjectId,ref:'BlogPost'}

},{timestamps:true})

const comments = mongoose.model("comment",commentSchema)

module.exports = comments