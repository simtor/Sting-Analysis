const http = require ("http")
const  fs = require('fs')
const port = 3000

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    fs.readFile("index.html", function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else{
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
      console.log(`Example app listening at http://localhost:${port}`)
    }
})

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

// var wordCounts = { };
// var str = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,, comes from a line in section 1.10.32.';
// var words = str.split(/\b/);

// for(var i = 0; i < words.length; i++)
//     wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1;

// console.log(wordCounts);

