const fs = require('fs')
const http = require('http')
const path = require('path')

const server = http.createServer((req,res)=>{

    let filepath = path.join(__dirname,'box1','home.html')

    switch(req.url){

        case'/':
        filepath = path.join(__dirname,'box1','home.html')
        break;
        case'/about':
        filepath = path.join(__dirname,'box1','about.html')
        break;

        default:
            break;
        
    }

    fs.readFile(filepath,(err,data)=>{

        if(err){
            console.log(`Error reading file: ${err}`)

        }
        res.write(data)
        res.end()
    })
})
server.listen('3000',()=>{

    console.log('server is running on port 3000')
})