var express = require('express');
var router = express.Router();
const _ = require('lodash');
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//增加信息
  let { id, page, rows, key, value } = req.query;
  let data = await client.get('/product', { page, rows, submitType: "findJoin", ref: ["commodity","stores"]});

  
  let newAry = _.filter(data.rows, function (o) {
    console.log(o);
    
    return o.stores._id == id
  });
  res.send([newAry,data]);
  // let news = _.filter(newAry, function (o) {
  //   var patt1 = new RegExp(value);
  //   return patt1.test(o.commodity[key])
  // });

  // if (key) {
  //   // console.log(key, value);
  //   let news = _.filter(newAry, function (o) {
  //     var patt1 = new RegExp(value);
  //     return patt1.test(o.commodity[key])
  //   });
  //   res.send([news, data]);
  // } else {
  //   res.send([newAry, data]);
  // }

});
router.post('/', async function (req, res) {
  let data = await client.post('/product', req.body);
  res.send('suc');
});
router.delete('/:id', async function (req, res) {
  let id = req.params.id
  let data = await client.delete('/product/' + id);
  res.send('OK');
});
module.exports = router;
