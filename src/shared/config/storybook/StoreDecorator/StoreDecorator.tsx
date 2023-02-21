import { Story } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (StoreComponent: Story) => (
    <StoreProvider>
        <StoreComponent />
    </StoreProvider>
);
