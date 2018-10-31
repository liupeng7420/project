var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

// 渲染和查询
router.get('/supplier', async function (req, res) {
  let{type,value,page,rows} = req.query;
  //page和rows是字符串，要转换成数字
  if (type) {
      let obj={}
      obj[type]=value
      //json对象里面的键名如果是变量要加中括号，值不用加中括号
      // 正则表达式中使用变量。一定要使用eval将组合的字符串进行转换，例如：eval("/" +text +"/")
      let data = await client.get("/supplier", {page,rows,...obj});
      res.send(data);
  } else {
      let data = await client.get("/supplier",{page,rows});
      res.send(data);
  }
});


//增加
router.post("/", async function (req, res) {
  let body = req.query;
  console.log(body);
  
  await client.post('/supplier/', body);
  res.send("suc");
})

//删除
router.delete("/:id", async function (req, res) {
  let id = req.params.id;
  await client.delete('/supplier/' + id);
  res.send("OK");
})

//修改  //获取到id
router.get("/:id", async function (req, res) {
  let id = req.params.id;
  console.log(id);
  let data = await client.get("/supplier/" + id);
  res.send(data);
})

//确认修改
router.put("/:id", async function (req, res) {
  let id = req.params.id;
  let data= req.body;
  delete data._id;
  await client.put("/supplier/" + id, data);
  res.send("suc");
})
module.exports = router;
