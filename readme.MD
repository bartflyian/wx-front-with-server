工具： nodejs@10.16.0   mysql@5.7   vue/cli@4.1.2

wx-webfront :
    vue前端代码文件夹 

    运行：
        npm install
        npm run serve  (localhost:8080)

wx-webserver:
    koa2 + sequelize + mysql 后端代码文件夹
    
    运行：
        npm install
        node app.js    (localhost:3000)


(1) 1.创建mysql数据库(koa)
    2.navicat执行:(创建users表)
    --------------------------------------
    use koa;
    create table users (
        id varchar(50) not null,
        name varchar(100) not null,
        gender bool not null,
        birth varchar(10) not null,
        createdAt bigint not null,
        updatedAt bigint not null,
        version bigint not null,
        primary key (id)
    ) engine=innodb;

    ---------------------------------------

(2) 服务器文件夹介绍
    + wx-webserver
        + config        
            - DBconfig.js   // 数据库连接配置
        + controller        // 控制器文件夹
        + lib               // Sequelize 连接数据库配置
        + models            // 数据库表映射(sequelize)
        + router            // http请求 路由配置
        + service           // 数据库操作
        + views             // 路由页面
        - app.js            // 入口文件
        - model.js          // 自动化加载models
        - router.js         // 自动化加载routers
        - templating.js     // 路由页面输出配置

(3) 功能模块分析 


 
            
