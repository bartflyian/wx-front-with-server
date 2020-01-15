const controller = require("../controller/wangyiController") 
module.exports = {
    'GET /comments': controller.getWYComments
};