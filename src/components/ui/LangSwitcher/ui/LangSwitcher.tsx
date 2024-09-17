import { useTranslation } from "react-i18next";
import cls from "./LangSwitcher.module.scss";
import clsx from "clsx";
import { Icon } from "../../Icon";
import { ReactComponent as USAIcon } from "@/assets/icons/HeaderIcons/usaIcon.svg";
import { ReactComponent as UAIcon } from "@/assets/icons/HeaderIcons/uaIcon.svg";
import { useState } from "react";

interface LangSwitcherProps {
    className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const [flag, setFlag] = useState<boolean>(false);

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ua" : "en");
        setFlag(!flag);
    };

    return (
        <button className={clsx(className, cls.LangSwitcher)} onClick={toggle}>
            {flag ? <Icon Svg={UAIcon} /> : <Icon Svg={USAIcon} />}
            {t("Lang")}
        </button>
    );
};

export { LangSwitcher };
