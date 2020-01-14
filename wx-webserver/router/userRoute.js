
const controller = require("../controller/userController") 
module.exports = { 
    'GET /getAll': controller.getAll,
    'POST /add': controller.addOneUser,
    'POST /delete': controller.deleteUser
};