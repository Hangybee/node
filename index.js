const http = require("http")
const fs = require("fs")
const url = require("url")

const myServer = http.createServer((req, res)=>{
    const my_url = url.parse(req.url, true)
    console.log(my_url.query)
    const log = `${Date.now()}: ${req.url} New Req Received\n`
    fs.appendFile("./log.txt", log, (err, data) =>{
        switch(my_url.pathname){
            case "/":
                res.end("HomePage")
                break;
            case "/about":
                const userName = my_url.query.name
                res.end(`Hi, ${userName}`)
                break;
            case "/search":
                const search = my_url.query.search_param
                res.end('your result for ' + search + " are")
                break;
            default:
                res.end("Error 404 Found ")
        }
    })
    console.log('new request from client')
})

myServer.listen(8000, ()=> console.log("Server Started!"))