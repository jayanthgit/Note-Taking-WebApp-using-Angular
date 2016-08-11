'use strict';

module.exports = function() {
    
    var client = './client/';
    var server = './server/';
    
    var config = {
        lintingfiles: [
            './client/app/**/*.js',
            './server/**/*.js',
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
