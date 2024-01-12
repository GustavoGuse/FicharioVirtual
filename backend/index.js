const express=require('express')
const path = require("path")
var app = express();





app.use(express.static(path.join(__dirname,"../","build")))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,"../","build","index.html"))
})
app.listen(80,"0.0.0.0",()=>{
    console.log("Aberto em 0.0.0.0")
  })