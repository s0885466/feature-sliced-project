const fs = require('fs/promises');

const { getSliceDirPath } = require('../get-slice-dir-path/get-slice-dir-path');
const { createUi } = require('../create-ui/create-ui');

module.exports = async (layer, sliceName) => {
    try {
        const sliceDirPath = getSliceDirPath(layer, sliceName);

        await fs.mkdir(sliceDirPath);

        await createUi(layer, sliceName);
    } catch (error) {
        throw new Error(error.message);
    }
};
