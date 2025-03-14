const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose')

mongodb://localhost:27017

mongoose.connect('mongodb://127.0.0.1:27017/Blog')
    .then(()=>console.log("Connected"))
    .catch((err)=>console.log(err))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'box1','home.html'))
})

app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'box1','about.html'))
})

app.listen(3003,()=>{
    console.log("Server is running on port 3003")
})


// CRUD operation 
// Create - post 
// Read - get 
// Update - put 
// Delete 

// Get 
// Post 
// Put 
// Delete 