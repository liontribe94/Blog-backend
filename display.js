const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded())

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'box1','contactform.html'))
})

app.get('/registerpage',(req,res)=>{
    res.sendFile(path.join(__dirname,'box1','register.html'))
})

app.post('/register',(req,res)=>{
    // let fullname = req.body.fullname;
    // destructuring
    let {firstname,lastname,email,gender,country} = req.body;
    console.log(gender,country);
    // console.log(fullname,email,phone,password,country)
    let myData = `<table border="1">
        <thead>
            <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>email</th>
                <th>gender</th>
                <th>country</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>${firstname}</td>
                <td>${lastname}</td>
                <td>${email}</td>
                <td>${gender}</td>
                <td>${country}</td>
            </tr>
        </tbody>
    </table>`

    res.send(myData)
})


app.listen(3050,()=>{
    console.log("server is running on port 3050")
})