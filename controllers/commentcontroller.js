const Comments = require('../models/comments')
const User = require('../models/user')
const BlogPost = require('../models/BlogPost')


const commentData = async (req,res)=>{
    try {
        const {comment} = req.body
        const {userId} = req.params
        const {postId} = req.params
       
    
        const knowUser = await User.findById(userId)
        const postUser = await BlogPost.findById(postId)
        
        if(!knowUser) return res.send("User not found")
        if(!postUser) return res.send("post not found")
    
        const postComment = await Comments.create({
            comment,
            author:knowUser._id,
            post:postUser._id
        })
          
        if(postComment){
            console.log("comment submitted")
            res.send("comment sent successfully")
    
        } else {
            console.log("Error while sending comment")
            res.send("ops something went wrong")
        }
        console.log(`Before : ${postUser}`)
        postUser.comments.push(postComment._id)
        console.log(`After : ${postUser}`)
        
        await postUser.save()
  
    } catch (error) {
        console.log(`Internal server error : ${error}`)
    }
}

const fetchComment1 = async (req,res)=>{
    try {
        let{id} = req.params
    
        let comment1 = await Comments.findById(id)
    
        if(!comment1) return res.send("comment not found")
        res.send(comment1)
        
    } catch (error) {
        console.log(`Error while fetching comment : ${error}`)
    }
}

const deleteComment1 = async (req,res)=>{
    try {
        let{id} = req.params;
    
        let comment1 = await Comments.findByIdAndDelete(id)
    
        if(!comment1) return res.send("comment not found")
        res.send("comment deleted sucessfully")
        
    } catch (error) {
        console.log(`Error while deleting comment : ${error}`)
    }
}

const updateComment1 = async (req,res)=>{
    try {
        let{id} = req.params
    
        let newData = req.body;
    
        let comment2 = await Comments.findByIdAndUpdate(id,newData,{new:true})
    
        if(!comment2) return res.send("comment not found")
        res.send(newData)
        
    } catch (error) {
        console.log(`Error while updating comment : ${error}`)
    }
}


module.exports = {commentData,fetchComment1,deleteComment1,updateComment1}