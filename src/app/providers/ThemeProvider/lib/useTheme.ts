import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

const THEMES_QUEUE: Theme[] = [Theme.LIGHT, Theme.DARK, Theme.ORANGE];

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme = Theme.LIGHT;
        const themeIndex = THEMES_QUEUE.findIndex((themeItem) => themeItem === theme);

        if (themeIndex < (THEMES_QUEUE.length - 1)) {
            newTheme = THEMES_QUEUE[themeIndex + 1];
        }

        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.LIGHT,
        toggleTheme,
    };
}
