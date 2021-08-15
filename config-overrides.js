/* eslint-disable */
const path = require('path');
const { alias, configPaths } = require('react-app-rewire-alias')

const rewireEntries = (config) => {
    const entryMap = {
        demo: path.resolve(__dirname, 'src', 'build-scripts', 'demo.tsx'),
        export: path.resolve(__dirname, 'src', 'build-scripts', 'export.ts'),
    };
    const buildMode = process.env.BUILD_MODE || 'export';

    const currentEntry = entryMap[buildMode];
    config.entry = currentEntry;

    return config;
}

const rewirePaths = (config) => {
    const customPathsFileName = path.resolve(__dirname, 'tsconfig.paths.json');
    const rewire = alias(configPaths(customPathsFileName))
    return rewire(config)
}

const pipe = (...modifiers) => (config) => modifiers.reduce((rewiredConfig, modifier) => modifier(rewiredConfig), config)

const override = pipe(rewireEntries, rewirePaths)

module.exports = override;