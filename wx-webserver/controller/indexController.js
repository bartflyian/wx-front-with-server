const user = require("../service/user")
let getInindex = async (ctx) => { 
    ctx.body = "index";   
    let data = await user.showAllUser();
    ctx.render('index.html', {
        data: data
    });
}
module.exports = {
    getInindex
};