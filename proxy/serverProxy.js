const express = require('express')
const app = express()


app.get('/list',(req,res)=>{
    res.send('hello')
})

app.listen(8003,_ =>{
    console.log('OK')
})