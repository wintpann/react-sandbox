/* eslint-disable */
const { rewireEntries, rewirePaths } = require('./webpack-overrides');

const pipe = (...modifiers) => (config) => modifiers.reduce((rewiredConfig, modifier) => modifier(rewiredConfig), config);

const override = pipe(rewireEntries, rewirePaths);

module.exports = override;
