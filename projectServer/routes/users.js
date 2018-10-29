var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

//录入数据库
router.post('/reg', async function (req, res) {
  let body = req.body;
  // console.log("BODY:"+body);
  if (body.code == "admin") {
    body.role = "平台管理员";
    body.condition = ""
  }
  console.log(body);
  await client.post('/users', body);
  // console.log("DATA:"+data);
  res.send("suc");
})

//验证账号是否重复
router.get('/validate', async function (req, res) {
  let username = req.query.username;
  // console.log("phone",phone);
  let data = await client.get('/users', { username });
  if (data.length > 0) {
    res.send({ status: 0 });
  } else {
    res.send({ status: 1 });
  }
})


//登录判断
router.get('/login', async function (req, res) {
  let body = req.query;
  let data = await client.get("/login", body);
  console.log(data);
  if(data.pwd && data.role =="门店管理员"){
    res.send({ status: 1 });
  }
  if(data.pwd && data.role =="平台管理员"){
    res.send({ status: 2 });
  }else{
    res.send({ status: 0 });
  }
})
module.exports = router;
