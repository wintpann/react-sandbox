/* eslint-disable */
const path = require('path');

const entryMap = {
    demo: path.resolve(__dirname, 'src', 'demo', 'one.tsx'),
    export: path.resolve(__dirname, 'src', 'two.tsx'),
};

module.exports = function override(config) {
    console.log('LOOOG here');
    const buildMode = process.env.BUILD_MODE || 'export';
    const c = {...config}
    c.entry = entryMap[buildMode];
    return c;
};
