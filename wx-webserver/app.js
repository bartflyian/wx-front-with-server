const Koa = require("koa") 
const bodyParser = require("koa-bodyparser");   //处理post请求
const templating = require('./templating');     //处理跳转页面模板
const routerController = require('./router');     //加载路由处理器

var app = new Koa();    //创建Koa实例
app.use(bodyParser());  //处理表单post请求

// add nunjucks as view: 使用nunjucks
app.use(templating('views', { 
}));

app.use(routerController().routes());   //注册路由   

app.use(async (ctx) => { 
    console.log("404 Not Found")
}) 
   
app.listen(3000) 
console.log("项目启动http://127.0.0.1:3000")