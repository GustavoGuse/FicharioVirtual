const express=require('express')
var app = express();





app.use(express.static('C:/Users/gguse/Documents/programa mae/programamae/build'))
app.get('*',(req,res)=>{
    res.sendFile('C:/Users/gguse/Documents/programa mae/programamae/build/index.html')
})
app.listen(80,"0.0.0.0",()=>{
    console.log("Aberto em 0.0.0.0")
  })