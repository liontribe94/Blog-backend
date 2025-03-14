const express = require('express')
const app = express()
const path = require('path')
const mongoose =require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user')
dotenv.config()
const port = process.env.PORT||3003
const bcrypt = require('bcryptjs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

mongoose.connect("mongodb://127.0.0.1:27017/Blog")
.then(()=>console.log('mongoDB connected'))
.catch((err)=>console.log('Error while connecting to database'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'Box1','register.html'))
})

app.post('/register',async(req,res)=>{
    const {firstname,lastname,email,gender,country,password} = req.body

    const hashedpassword = await bcrypt.hash(password,10)

    const userData = await User.create({
        firstname,
        lastname,
        email,
        gender,
        country,
        password:hashedpassword
    })
    if (userData) {
        console.log("Data Submitted")
        res.send("Sign up  successful")
    } else {
        console.log("Error While registering")
        res.send("ops something went wrong")

    }
    await userData.save()
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

