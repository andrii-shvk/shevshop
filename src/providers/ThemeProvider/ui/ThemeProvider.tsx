import { FC, useState } from "react";
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ThemeContext,
} from "../lib/ThemeContext";

const defaultTheme =
    (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: React.ReactNode;
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = {
        theme: theme,
        setTheme: setTheme,
    };
    // document.body.className = theme;
    // document.getElementById("app")?.classList.add(theme);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider };
