const model = require("../model")

let User = model.user;

//显示user表信息 
async function showAllUser() {   
    return await User.findAll({
        order: [
            'name'
        ]
    })
}

module.exports = {
    showAllUser
} 