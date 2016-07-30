'use strict';

module.exports = function() {
    
    var client = './app/client/';
    var server = './app/server/';
    
    var config = {
        lintingfiles: [
            './app/client/app/**/*.js',
            './app/server/**/*.js',
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
