import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecoratorDark } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Sidebar } from 'widgets/Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

// Light theme

export const SidebarLight = Template.bind({});

// Dark theme

export const SidebarDark = Template.bind({});
SidebarDark.decorators = [ThemeDecoratorDark];
