var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {
    let storeId = req.query.storeId;
    let data = await client.get("/indent", { storeId:storeId });
    console.log(data)
    // data = data.filter(function(item,index){ return item.users._id ==id })
    
    // console.log(id);
    
    console.log(data);
    res.send(data);
  });
module.exports = router;

