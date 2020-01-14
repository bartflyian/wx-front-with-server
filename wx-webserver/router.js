const fs = require('fs'); 

function addMapping(router, mapping) {
    for (var url in mapping) {
        var
            delimiter = url.indexOf(' ');
            method = url.slice(0, delimiter);
            path = url.slice(delimiter+1);
            
        if (method === 'GET') {
            router.get(path, mapping[url]);
        } else if (method === 'POST') { 
            router.post(path, mapping[url]);
        } else if (method === 'PUT') {
            router.put(path, mapping[url]);
        } else if (method === 'DELETE') {
            router.del(path, mapping[url]);
        } else {
            console.log(`invalid URL: ${url}`);
            continue;
        }
        console.log(`register URL mapping: ${method} ${path}`);
    }
}

function addControllers(router, dir) {
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`process controller: ${f}...`); 
        let mapping = require(__dirname + '/' + dir + '/' + f); 
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let
        controllers_dir = dir || 'router',
        router = require('koa-router')();
    addControllers(router, controllers_dir);  
    return router;
};