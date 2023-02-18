import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator = (theme: Theme) => (ThemeComponent: Story) => (
    <div className={`app ${theme}`}>
        <ThemeComponent />
    </div>
);

export const ThemeDecoratorLight = ThemeDecorator(Theme.LIGHT);
export const ThemeDecoratorDark = ThemeDecorator(Theme.DARK);
