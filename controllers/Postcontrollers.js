const BlogPost = require("../models/BlogPost")
const User = require('../models/user')
    
const blogData = async (req,res)=>{
    try {
        const {title,snippet,content} = req.body;
        const {userId} = req.params;
    
        const knowUser = await User.findById(userId)
    
        if(!knowUser) return res.send("User not found")
    
            
    
        const postData = await BlogPost.create({
            title,
            snippet,
            content,
            author:knowUser._id
        })
    
        if (postData) {
            console.log(" PostData submitted")
            res.send("Post sent sucessfully")
        } else {
            console.log("Error while sending post")
            res.send("ops something went wrong")
        }
        await postData.save()
        
    } catch (error) {
       console.log(`Error while posting data : ${error}`) 
    }

}
const getPosts = async (req,res)=>{
    try {
        let myposts = await BlogPost.find()
            .populate('author', 'fullname')
    
        if(!myposts) return res.send("post not found") 
             
        res.send(myposts) 
        
    } catch (error) {
        console.log(`Error while getting post : ${error}`)
    }

}
const getOnePost = async (req,res)=>{
    try {
        let {postId} = req.params;

        let onePost = await BlogPost.findById(postId)
        .populate({
            path: 'comments',
            populate: {path:'author',select:'fullname email'}
        })
        .populate('author', 'fullname email')
    
        if(!onePost) return res.send("post not found") 
             
        res.send(onePost) 
        
    } catch (error) {
        console.log(`Error while getting one post : ${error}`) 
    }
}

const delPost = async (req,res)=>{
    try {
        let {postId} = req.params;

        let deletedPost = await BlogPost.findByIdAndDelete(postId);

        if(!deletedPost) return res.json({message:"Post not found"});

        res.json({message:"Post deleted successfully!", deletedPost})

    } catch (error) {
        console.log(`Error while deleting post : ${error}`)
    }
}

const updatePost = async (req,res)=>{
    try {
        let {id} = req.params
        let newData = req.body

        let updatedPost = await BlogPost.findByIdAndUpdate(id,newData,{new:true})

        if(!updatedPost) return res.json({message:"post update not found"})
        res.json({message:"post updated sucessfully"})
    console.log(newData)
            // res.send(newData)
    } catch (error) {
        console.log(`Error while updating post :${error}`)
    }
}

module.exports = {getPosts,getOnePost,blogData, delPost,updatePost}
