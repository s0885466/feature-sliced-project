import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./theme-context";

type UseThemeResult = {
  theme: Theme;
  toggleTheme: VoidFunction
}

export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)

  console.log(typeof setTheme);
  console.log(theme)

  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    setTheme(newTheme)
  }

  return {theme, toggleTheme}
}
