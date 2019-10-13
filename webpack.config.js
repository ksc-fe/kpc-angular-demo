const path = require('path');

module.exports = function(config) {
    config.module.rules.find(rule => {
        if (rule.test.toString() === '/\\.css$/') {
            rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
            return true;
        }
    });

    return config;
}

