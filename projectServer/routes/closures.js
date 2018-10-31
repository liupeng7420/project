var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//获取商店数据
    let { type, page, rows,value } = req.query;
    let data = await client.get("/closures",{page,rows,submitType :"findJoin",ref:'stores'});
    if(value){
        let reg = new RegExp(value)
        data.rows = data.rows.filter(function(item,index){return item.stores[type].match(reg)})
        console.log("data",data)
    }
    res.send(data);
});
module.exports = router;
