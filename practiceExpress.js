const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const User = require('./models/user')
dotenv.config()
const port = process.env.PORT||3003
const dbconfig = require('./db/dbconfig')
dbconfig()
const userRoutes = require('./routes/userroutes')
const postRoutes = require('./routes/postroutes')
const commentRoutes = require('./routes/commentroutes')
const cors = require('cors')
// const bcypt = require('b/cryptjs')
const { signUp, signIn, getUsers, oneUser, twoUser, updateOneUser } = require('./controllers/usercontroller')
const { blogData, getPosts } = require('./controllers/Postcontrollers')
const { commentData, fetchComment1, deleteComment1, updateComment1 } = require('./controllers/commentcontroller')

app.use(cors({
    origin:"https://chin-blog.onrender.com"
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'box1','register.html'))
})

app.use('/user',userRoutes)
app.use('/post',postRoutes)
app.use('/comment',commentRoutes)
console.log("routes connected")


// app.post('/register', signUp)
// app.post('/login', signIn)
// app.post('/create/:userId',blogData)
// app.post('/comment/:userId/:postId',commentData)

// app.get('/allusers',getUsers)
// app.get('/allposts',getPosts)
// app.get('/user/:id',oneUser)
// app.delete('/user/:id',twoUser)
// app.get('/comment/:id',fetchComment1)
// app.delete('/comment/:id',deleteComment1)

// app.put('/user/:id',updateOneUser)
// app.put('/comment/:id',updateComment1)

app.post('/user/login',(req,res)=>{

})

app.get('/user',(req,res)=>{

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
