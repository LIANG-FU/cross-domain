const express = require("express");
const app = express();

app.use(express.static('./'))

app.listen(8006, _ => {
  console.log("OK");
});

// app.get("/list", (req, res) => {
//     // Function.prototype是一个匿名的空函数
//   let { callback = Function.prototype } = req.query;
//   let data = {
//       code:0,
//       message:'跨域请求'
//   }
//   res.send(`${callback}(${JSON.stringify(data)})`)
// });
