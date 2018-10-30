var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
const multiparty = require("multiparty");
const path = require('path');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//商品
  let { name, value, page, rows } = req.query;
  // console.log(name, value, page, rows);
  let data = await client.get("/commodity", { page, rows, name: value });
  // console.log(data,123);
  res.send(data);
});
router.get("/:id", async function (req, res) {//id
  let id = req.params.id;
  // console.log(id);
  let data = await client.get("/commodity/"+id);
  res.send(data);
});
router.delete("/:id", async function (req, res) {//id
  let id = req.params.id;
  console.log("删除",id);
  
  await client.delete("/commodity/"+id);
  res.send("OK");
});
router.post("/adds", async function (req, res) {//新增
  let body = req.body;
  let data = await client.post("/commodity",body);
  res.send("OK");
});
router.post("/upload",function(req,res){//上传图片
  let form = new multiparty.Form({uploadDir:"./public/upload"});
  form.parse(req,function(err,fields,files){
    if(err){
      res.send(err);
    } else {
      res.send(path.basename(files.file[0].path));
    }
  });
});
router.put("/:id",async function(req,res){
  let id = req.params.id
  let body = req.body;
  delete body._id;
  console.log(id);
  await client.put("/commodity/"+id,body)
  res.send("OK")
})
module.exports = router;
