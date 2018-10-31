var express = require('express');
var router = express.Router();
const multiparty = require("multiparty");
const path = require('path');
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//渲染页面
  let stores = req.query.id;
  let { type,
    value,page,rows,id} = req.query;
    let searchObj = {};
  if (type) {
    searchObj[type] = value;
  };
  let data = await client.get("/service",{page,rows,stores,...searchObj});
  res.send(data);
});
router.get("/:id", async function (req, res) {//
  let id = req.params.id;
  let data = await client.get("/service/"+id);
  res.send(data);
});
router.delete("/:id", async function (req, res) {//删除
  let id = req.params.id;
  await client.delete("/service/"+id);
  res.send("suc");
});
router.put("/:id", async function (req, res) {//修改
  let id = req.params.id;
  let body = req.query;
  await client.put("/service/"+id,body);
  // console.log(data);
  res.send("suc");
});
router.post("/", async function (req, res) {//添加
  
  let body = req.body;
  await client.post("/service",body);
  // console.log(data);
  res.send("suc");
});
router.post("/upload",function(req,res){//上传图片
  let form = new multiparty.Form({uploadDir:"./public/upload/service"});
  form.parse(req,function(err,fields,files){
    if(err){
      res.send(err);
    } else {
      res.send(path.basename(files.informationsUploadImg[0].path));
    }
  });
});
module.exports = router;
