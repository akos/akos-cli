const fs = require('fs');
const path = require('path');

const TYPES = ['app', 'api'];
const defaults = require('./defaults');

module.exports = function (relativePath = 'akos.config.js') {
    const config = defaults;

    const packagePath = path.join(process.cwd(), 'package.json');
    if (fs.existsSync(packagePath))
        Object.assign(config, require(packagePath).akos);
    const configPath = path.join(process.cwd(), relativePath);
    if (fs.existsSync(configPath))
        Object.assign(config, require(configPath));

    if (!TYPES.includes(config.type))
        throw new Error('Unknown project type!');

    config.root = config.root || process.cwd();
    config.srcPath = config.srcPath || './src';
    config.routesPath = path.resolve(config.root, config.routesPath || path.join(config.srcPath, 'routes.js'));
    config.controllersPath = path.resolve(config.root, config.controllersPath || path.join(config.srcPath, 'controllers'));

    return config;
};
