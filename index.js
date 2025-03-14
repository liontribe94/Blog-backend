// some inbuilt node modules
// Os
// Fs
// http
// path

// const os = require('os')

// const fs = require('fs');
// fs.mkdir('Box',(err)=>{

//     if(err) console.log(err);
    
//     console.log("folder was created")
// })

// fs.writeFile('box/home.txt', 'i love coding',(err)=>{

//     if(err) console.log(err)
//         console.log("file was created")
// })

// fs.writeFile('box/mine.txt', 'i love coding',(err)=>{

//     if(err) console.log(err)
//         console.log("file was created")
// })

// fs.unlink('Box/.txt',(err)=>{

//     if(err) console.log(err)
//         console.log("file was deleted")
// })

// http can be used to create a server that is used to listen for a specific port and now listens for requests from the 
    // client side and send back responses

    // const http = require('http')

    // const server = http.createServer((req,res)=>{
    //     res.writeHead(200,{'content-type':'text/html'})

    //     if (req.url ==='/') {

    //         res.write('<h1>Home page</h1>')
    //         res.end()
            
    //     } else if(req.url==='/about'){
    //         res.write('<h1>About page</h1>')
    //         res.end()
            
    //     }

    // })

    // server.listen('5050',()=>{
    //     console.log("server is running on port 5050")
    // })


    // Assignment.
    // - create a html folder and create 2 html file inside using the fs modules
    // - display the first html file when the req.url ==='/'
    // - display the other html file when the req.url ==='/about'
    
    const fs = require('fs')
    
    fs.mkdir('Box1',(err)=>{

        if(err) console.log(err)

            console.log('folder was created')
    })

    fs.writeFile('Box1/home.html','<h1>ilove coding</h1>',(err)=>{

        if(err) console.log(err)
            console.log('file was created')
    })
    fs.writeFile('Box1/about.html','<h1>chinedu is coding</h1>',(err)=>{

        if(err) console.log(err)
            console.log('file was created')
    })


    fs.readFile("")


