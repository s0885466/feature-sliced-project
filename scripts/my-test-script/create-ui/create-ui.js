const path = require('path');
const fs = require('fs/promises');

const { getSliceDirPath } = require('../get-slice-dir-path/get-slice-dir-path');
const {
    getUiComponentTemplate,
} = require('../get-ui-component-template/get-ui-component-template');

const createUi = async (layer, sliceName) => {
    // создать директорию ui
    const sliceDirPath = getSliceDirPath(layer, sliceName);
    const uiFolderPath = path.resolve(sliceDirPath, 'ui');
    const uiFilePath = path.resolve(uiFolderPath, sliceName);

    try {
        await fs.mkdir(uiFolderPath);

        await fs.mkdir(uiFilePath);

        const fileName = sliceName;
        const filePath = path.resolve(uiFilePath, `${fileName}.tsx`);

        await fs.writeFile(filePath, getUiComponentTemplate(fileName));
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = {
    createUi,
};
