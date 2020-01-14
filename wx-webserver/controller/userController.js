
const user = require("../service/user")  

let getAll  = async (ctx) => {    //获取全部 
    await user.showAllUser().then(data => {
        return ctx.response.body = data;
    }); 
   }

let addOneUser = async (ctx) => {    //添加
    let namedata = ctx.request.body 
    await user.addUser(namedata.name).then(data => {
        return ctx.response.body = data;
    }); 
} 

let deleteUser = async (ctx) => {    //删除
    let id = ctx.request.body 
    await user.deleteUser(id).then(resposeData => {
        return ctx.response.body = resposeData;
    }); 
} 


module.exports={
    getAll,
    addOneUser,
    deleteUser
} 