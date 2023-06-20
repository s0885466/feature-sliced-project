const path = require('path');

// change this path if replace scripts directory
const rootProjectDir = path.resolve(__dirname, '..', '..', '..');

const getSliceDirPath = (layer, sliceName) => path
    .resolve(rootProjectDir, 'src', layer, sliceName);

module.exports = {
    getSliceDirPath,
};
