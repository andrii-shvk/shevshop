import { Icon } from "../../Icon";
import cls from "./ThemeSwitcher.module.scss";
import { ReactComponent as MoonIcon } from "@/assets/icons/HeaderIcons/moonDark.svg";
import { ReactComponent as SunIcon } from "@/assets/icons/HeaderIcons/sunLight.svg";
import { Theme } from "@/providers/ThemeProvider/lib/ThemeContext";
import { useTheme } from "@/providers/ThemeProvider/lib/useTheme";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} className={cls.ThemeSwitcher}>
            {theme === Theme.DARK ? (
                <Icon Svg={MoonIcon} />
            ) : (
                <Icon Svg={SunIcon} />
            )}
        </button>
    );
};

export { ThemeSwitcher };
