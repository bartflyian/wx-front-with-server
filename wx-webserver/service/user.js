
const model = require("../model")
let User = model.user;

//显示user表信息 
async function showAllUser() {   
    return await User.findAll({
        order: 'createdAt DESC'
    })
}

//添加user信息 
async function addUser(username) {
    var now = Date.now();
    return await User.create({
                id: 'd-' + now,
                name: username,
                gender: false,
                birth: '2008-08-08',
                createdAt: now,
                updatedAt: now,
                version: 0
            });
} 

//删除user信息
async function deleteUser(data) {  
    return await User.destroy({
                where :{
                    id: data.id
                }
            });
} 

module.exports = {
    showAllUser,
    addUser,
    deleteUser
} 