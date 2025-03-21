const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signUp = async (req,res)=>{
    try {
        const {fullname,phone,email,role,password} = req.body
        
        if(!fullname || !phone || !email || !password){
            return console.log("All fields are required!")
        }
        const hashedpassword = await bcrypt.hash(password,10)
        console.log(req.body)
        const userData = await User.create({
            fullname,
            phone,
            email,
            role,
            password:hashedpassword
        })
        if (userData) {
            console.log("Data submitted")
            res.json({message:"signup successful"})
        } else {
            console.log("Error while registering")
            res.send("ops something went wrong")
        }
        await userData.save()
        
    } catch (error) {
        console.log(`Error while signing up : ${error}`)
    }

    
}

const signIn = async (req,res)=>{
    try {
        const {email,password} = req.body
        const checkEmail = await User.findOne({email})
    
        if(!checkEmail){
            return res.send("user not found")
        }
        const checkpassword = await bcrypt.compare(password,checkEmail.password)
        if(!checkpassword){
            return res.send('incorrect password')
        }

        const token = jwt.sign({id:checkEmail._id,role:checkEmail.role}, process.env.SECRETKEY, {expiresIn:'8h'});
        res.cookie("token",token, {
            httpOnly:true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"

        })


        res.json({message:"Login successful", token})
        
    } catch (error) {
       console.log(`Error while logging in : ${error}`) 
    }
}

const getUsers = async (req,res)=>{
    try {
        let myUsers = await User.find()
    
        if(!myUsers) return res.send("No users found") 
             
        res.send(myUsers) 
        
    } catch (error) {
        console.log(`Error while getting user : ${error}`) 
    }

}

const oneUser = async(req,res)=>{
    try {
        let {id} = req.params
    
        let user1 = await User.findById(id)
    
        if(!user1) return res.send("user not found")
            
        res.send(user1)
        
    } catch (error) {
        console.log(`Error while getting one user : ${error}`)   
    }

}
const twoUser = async(req,res)=>{
    try {
        
            let {id} = req.params
        
            let user2 = await User.findByIdAndDelete(id)
        
            if(!user2) return res.send("user not found")
        
            res.send("user deleted sucessfully")
        
    } catch (error) {
        console.log(`Error while deleting user : ${error}`)   
    }
}

const updateOneUser = async(req,res)=>{
    try {
        let {id} = req.params
    
        // let {fullname,phone,email} = req.body;
    
        let newData = req.body;
    
        let user3 = await User.findByIdAndUpdate(id,newData,{new:true});
    
        if(!user3) return res.send("user not found")
    
        res.send(newData)
        
    } catch (error) {
        console.log(`Error while updating one user : ${error}`)    
    }
    
}

module.exports = {signUp,signIn, getUsers, oneUser,twoUser,updateOneUser}


