/* eslint-disable */
const path = require('path');
const { alias, configPaths } = require('react-app-rewire-alias')

const rewireEntries = (config) => {
    config.entry = path.resolve(__dirname, 'src', 'build-scripts', 'demo.tsx');
    return config;
}

const rewirePaths = (config) => {
    const customPathsFileName = path.resolve(__dirname, 'tsconfig.paths.json');
    const rewire = alias(configPaths(customPathsFileName))
    return rewire(config)
}

module.exports = {
    rewirePaths,
    rewireEntries,
}
