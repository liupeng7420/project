var express = require('express');
var router = express.Router();
const client = require("ykt-http-client");
client.url("localhost:8080");
// 渲染和查询
router.get('/spoilMain', async function (req, res) {
    let{type,value,page,rows} = req.query;
    //page和rows是字符串，要转换成数字
    if (type) {
        let obj={}
        obj[type]=value
        //json对象里面的键名如果是变量要加中括号，值不用加中括号
        // 正则表达式中使用变量。一定要使用eval将组合的字符串进行转换，例如：eval("/" +text +"/")
        let data = await client.get("/spoilMain", {page,rows,...obj});
        res.send(data);
    } else {
        let data = await client.get("/spoilMain",{page,rows});
        res.send(data);
    }
});

module.exports = router;