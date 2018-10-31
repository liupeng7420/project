var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */
const path = require('path');
const session = require('express-session');

//获取用户
router.get('/getSession', function (req,res,next){
  // console.log(req.session)
  res.send(req.session.user || {});
})
//删除用户
router.get('/removeSession', function (req,res){
  req.session.user = {};
  res.send('session已清空')
})

//录入数据库
router.post('/reg', async function (req, res) {
  let body = req.body;
  // console.log("BODY:"+body);
  if (body.code == "admin") {
    body.role = "平台管理员";
    body.condition = ""
  }else{
    body.role = "门店管理员";
    body.condition = "申请中"
  }
  // console.log(body);
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
  // console.log(data);
  if(data.pwd && data.role =="门店管理员"){
    // console.log(req.session);
    
    req.session.user = data;
    res.send({ status: 1 });
   
    console.log("登录类型：门店管理员");

  }
  if(data.pwd && data.role =="平台管理员"){
    // console.log(data)
    console.log("输出session:",req.session.user);
    req.session.user = data;
    res.send({ status: 2 });
    
    console.log("登录类型：平台管理员");
  }else{
    res.send({ status: 0 });//账号密码错误
  }
})

// 从数据库渲染
router.get('/show', async function(req,res){
  let {type,value,page,rows} = req.query;
  let searchObj = {};
  if(type){
    searchObj[type]=value;
  }
  let data = await client.get("/users",{page,rows,...searchObj});
  console.log(data);
  res.send(data);
  
})

//添加
router.post('/add', async function(req,res){
  let body = req.body;
  // console.log(body)
  if (body.code == "admin") {
    body.role = "平台管理员";
    body.condition = ""
  }else{
    body.role = "门店管理员";
    body.condition = "申请中"
  }
  await client.post("/users",body);
  res.send("success")
})
//删除
router.delete('/dele', async function(req,res){
  let body = req.body.id;
  // console.log(body);
  await client.delete("/users/"+body);
  res.send("success")
})
//点击修改
router.get('/edit', async function(req,res){
  let body = req.query.id;
  // console.log(body)
 
  let data = await client.get("/users/"+body);
  res.send(data)
})

//确认修改
router.put('/put',async function(req,res){
  let id = req.body.id;
  let body = req.body;
  // console.log("id:",id);
  // console.log("body:",body);
  if (body.code == "admin") {
    body.role = "平台管理员";
    body.condition = ""
  }else{
    body.role = "门店管理员";
    body.condition = "申请中"
  }
  let data = await client.put("/users/"+id,body);
  res.send("success")
})
module.exports = router;
