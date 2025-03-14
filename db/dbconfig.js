const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')


const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect("mongodb://127.0.0.1:27017/Blog")
        console.log('mongoDB connected')
    } catch (error) {
        console.log(`Error while connecting to the database : ${error}`)
    }
}

module.exports = connectDB