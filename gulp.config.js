module.exports = function() {
    
    var client = './app/client/';
    var server = './app/server/';
    
    var config = {
        alljs: [
            './app/**/*.js',
            './*.js'
        ],
        client: client,
        index: client + 'index.html',
        server: server,
        defaultPort: 8080,
        nodeServer: 'server.js',
        browserReloadDelay: 1000,
    };

    return config;
};
