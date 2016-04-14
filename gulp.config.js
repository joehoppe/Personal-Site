module.exports = function () {
    var client = './src/client/';
    var clientApp = client + 'app/';
    var temp = './.tmp/';

    var config = {
        temp: temp,
        /**
         * Files paths
         */
        alljs: ['./app/**/*.js',
            './*.js',
            '!./**/*.min.js',
            '!./**/ga.js'
        ],
        client: client,
        css: temp + 'styles.css',
        index: 'index.html',
        js:[
            clientApp + '**/*.module.js',
            clientApp + '**/*.js',
            '!' + clientApp + '**/*.spec.js'
        ],

        less: client + 'styles/blogWebSkin.less',
        
        /**
         * Bower and NPM locations
         */
        bower: {
            json: require('./bower.json'),
            directory: './bower_components/',
            ignorePath: '../..'
        }
    };
    
    config.getWiredepDefaultOptions = function() {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            ignorePath: config.bower.ignorePath
        };
        return options;
    };

    return config;
};
