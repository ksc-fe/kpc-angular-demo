const path = require('path');

module.exports = function(config) {
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.css$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      return true;
    }
  });

  // if you want to use `ksyun` theme
  config.module.rules.find(rule => {
    if (rule.test.toString() === '/\\.styl$/') {
      rule.exclude.push(path.resolve(__dirname, 'node_modules/kpc-angular'));
      rule.use.find(loader => {
        if (loader.loader === 'stylus-loader') {
          Object.assign(loader.options, {
            'resolve url': true,
            'include css': true,
            'import': path.resolve(__dirname, 'node_modules/kpc-angular/@stylus/styles/themes/ksyun/index.styl')
          });
          return true;
        }
      });
      return true;
    }
  });

  return config;
}

