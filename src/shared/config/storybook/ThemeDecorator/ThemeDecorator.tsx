import { Story } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (ThemeComponent: Story) => (
    <div className={`app ${theme}`}>
        <ThemeComponent />
    </div>
);
