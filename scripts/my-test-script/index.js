const createTemplate = require('./create-template/create-template');

const [nodePath, filePath, layer, sliceName] = process.argv;

const layers = ['pages', 'features', 'widget'];

if (!sliceName || !layers.includes(layer)) {
    throw new Error(`Укажите слой ${layers.join(' или ')}`);
}

if (!sliceName) {
    throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName)
    .then(() => {
        console.log(`${layer}/${sliceName} is created successfully`);
    })
    .catch((error) => {
        console.log(error);
    });
