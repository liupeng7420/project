var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {
  let { type, page, rows,value } = req.query;
  let searchObj = {};
  if (type) {//模糊查询
      searchObj[type] = value ;
  }
  let data = await client.get("/applyfor",{page,rows, ...searchObj});
  res.send(data);
});
router.post("/add", async function (req, res) {
  let body = req.body;
  await client.delete("/applyfor/"+body._id);
  delete body._id;
  await client.post("/stores",body);
  let data = await client.get("/stores",{licensenumber:body.licensenumber});
  let through = {
    stores:{
      $ref:"stores",
      $id:data[0]._id
    }
  };
  await client.post("/business",through);
  res.send("suc");
});
router.delete("/:id",async function (req, res) {
  let id = req.params.id;
  await client.delete("/applyfor/"+id);
  res.send("suc");
});
module.exports = router;
