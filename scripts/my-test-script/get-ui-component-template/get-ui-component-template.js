const componentNameProps = (componentName) => `${componentName}Props`;

const getUiComponentTemplate = (componentName) => `import { memo } from 'react';

type ${componentNameProps(componentName)} = {
  
}

export const ${componentName} = memo((props: ${componentNameProps(
    componentName,
)}) => {
    return (
        <div>
           ${componentName}
        </div>
    );
});`;

module.exports = {
    getUiComponentTemplate,
};
