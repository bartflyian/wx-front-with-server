const Koa = require("koa") 
const bodyParser = require("koa-bodyparser");   //处理post请求
const templating = require('./templating');     //处理跳转页面模板
const routerController = require('./router');     //加载路由处理器

var app = new Koa();
app.use(bodyParser());

// add nunjucks as view:
app.use(templating('views', { 
}));

app.use(routerController().routes());   

app.use(async (ctx) => { 
    console.log("404 Not Found")
}) 
   
app.listen(3000) 
console.log("项目启动http://127.0.0.1:3000")