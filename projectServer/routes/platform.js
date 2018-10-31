var express = require('express');
var router = express.Router();
const client = require('ykt-http-client');
client.url('localhost:8080');
/* GET users listing. */

router.get("/", async function (req, res) {//获取商店数据
    let { type, page, rows, value } = req.query;
    let data = await client.get("/business", { page, rows, submitType: "findJoin", ref: 'stores' });
    if (value) {
        let reg = new RegExp(value)
        data.rows = data.rows.filter(function (item, index) { return item.stores[type].match(reg) })
        // console.log("data", data)
    }
    res.send(data);
});
router.delete("/:id", async function (req, res) {
    let id = req.params.id;
    // console.log(id);
    await client.delete("/business/" + id);
    res.send("suc");
});
router.post("/add", async function (req, res) {
    let body = req.body;
    // console.log(body.id);
    let id = body.id;
    let toClosed = {
        stores: {
            $ref: "stores",
            $id: id
        }
    };
    await client.post("/closures", toClosed);
    res.send("suc");
});
module.exports = router;