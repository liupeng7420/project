var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//增加信息
  console.log('====================================');
  console.log(123111);
  console.log('====================================');
  let data = await client.get("/ceshi");
  console.log(data);
  res.send(data);
});
module.exports = router;
