import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (ThemeComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <ThemeComponent />
        </div>
    </ThemeProvider>
);

export const ThemeDecoratorLight = ThemeDecorator(Theme.LIGHT);
export const ThemeDecoratorDark = ThemeDecorator(Theme.DARK);
