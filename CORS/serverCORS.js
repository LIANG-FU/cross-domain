const express = require('express')
const app = express()

var allowCrossDomain = function (req, res, next) {
    // 允许哪个源发起的请求（这里设置全部）
    res.header('Access-Control-Allow-Origin', '*');
    // 允许携带资源凭证，比如cookie
    res.header('Access-Control-Allow-Credentials', true);
    // 允许的请求方式
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    // 允许的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested');
    next();
  }

app.use(allowCrossDomain);

app.get('/list',(req,res)=>{
    res.send('hello')
})

app.listen(8002,_ =>{
    console.log('OK')
})