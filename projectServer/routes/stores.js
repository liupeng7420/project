var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
const multiparty = require('multiparty');
const path = require('path');
/* GET users listing. */
//获取单个商铺信息
router.get("/seek", async function (req, res) {
  let id = req.query.id;
  let data = await client.get("/stores/"+id);
  res.send(data);
});
router.get("/:id", async function (req, res) {
  let id = req.params.id;
  let data = await client.get("/stores", { submitType: "findJoin", ref: "users" });
  // console.log(data[0].users)
  data = data.filter(function(item,index){ return item.users._id ==id })
  
  console.log(id);
  
  console.log(data);
  res.send(data);
});
router.post("/upload",function(req,res){//上传图片
  console.log("111");
  let form = new multiparty.Form({uploadDir:"./public/upload/stores"});
  form.parse(req,function(err,fields,files){
    console.log(files)
    if(err){
      res.send(err);
    } else {
      res.send(path.basename(files.file[0].path));
    }
  });
});
router.post("/",async function(req,res){
    addstore=req.body;
    console.log(addstore);
    let data = await client.post('/applyfor', addstore);
    res.send('suc');
})
module.exports = router;
