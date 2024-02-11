const fs = require('fs')

// //Sync
// fs.writeFileSync("./test.txt","Hey there")

//Async
// fs.writeFile("./test.txt","Hello world Async",(err)=>{})

// const result = fs.readFileSync("./test.txt","utf-8")
// console.log(result)

fs.readFile("test.txt","utf-8",(err, result) =>{
    if(err){
        console.log("Error", err)
    }else{
        console.log(result)
    }
})

//async doesen't resturn but expect a callback always

// fs.appendFileSync("./test.txt",`${Date.now()} Hey there\n`)

// fs.cpSync("./test.txt","./copy.txt")

// 
console.log(fs.statSync("./test.txt"))
//file handling is not possible in normal javascrit due to security purposes
//blocking synchronous task
//non blocking asynchronous task