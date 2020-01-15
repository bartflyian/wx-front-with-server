const axios = require("../http/axios") 

let getWYapi = () => {
    return axios.get('http://musicapi.leanapp.cn/comment/music?id=186016&limit=1');
} 

let getWYComments = async (ctx) => {   
    await getWYapi().then(res => {
        let hotComments = res.data.hotComments;
        let commentsArr = [];
        let commentSingle = {};
        hotComments.forEach(item => {
            commentSingle = {};
            commentSingle.userName = item.user.nickname;
            commentSingle.avatarUrl = item.user.avatarUrl;
            commentSingle.content = item.content;
            commentsArr.push(commentSingle);
        });
        return ctx.response.body = commentsArr;
    });
}
module.exports = {
    getWYComments
};