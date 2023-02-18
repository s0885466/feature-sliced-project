import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// Light theme

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Text',
};

export const ClearLight = Template.bind({});
ClearLight.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};

// Dark theme

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Text',
};
PrimaryDark.decorators = [ThemeDecoratorDark];

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    theme: ThemeButton.CLEAR,
};
ClearDark.decorators = [ThemeDecoratorDark];

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecoratorDark];
