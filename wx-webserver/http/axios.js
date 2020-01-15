const axios = require("axios") 

axios.defaults.timeout = 5000; 

let baseurl = '';
if(process.env.NODE_ENV == 'development'){
  baseurl = '/api/';
}else if(process.env.NODE_ENV == 'production'){
   //
}
axios.defaults.baseURL = baseurl;// api 的 base_url

module.exports = axios;
 

