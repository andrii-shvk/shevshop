import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import clsx from "clsx";

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
    };

    return (
        <button className={clsx(className, cls.LangSwitcher)} onClick={toggle}>
            {t("Lang")}
        </button>
    );
};

export { LangSwitcher };
