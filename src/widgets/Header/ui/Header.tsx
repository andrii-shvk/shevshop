import cls from "./Header.module.scss";
import { HeaderIconsList } from "./const";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components/ui/SearchInput";
import { Icon } from "@/components/ui/Icon";
import { routerNavigations } from "@/const/router";
import { LangSwitcher } from "@/components/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";


const Header = () => {
    const { t } = useTranslation();

    const handleSearch = (query: string) => {
        console.log(query)
    }
 
    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>

                    <Link to={'/'} className={cls.logoTitle}>SHEVSHOP</Link>

                    <SearchInput
                        onSearch={handleSearch} 
                        placeholder={t("SearchInput")}
                    />

                    <div className={cls.icons}>
                        {HeaderIconsList.map(({ name, SvgIcon }) => (
                            <div key={name}
                                className={clsx(
                                    cls.headerIcon,
                                    (name === "Search" || name === "Home") ? cls.hiddenIcon : "")}>
                                <Icon Svg={SvgIcon} clickable className={cls.Icon}  />
                                <p className={cls.iconTitle}>{t(name)}</p>
                            </div>
                        ))}
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </div>
                </div>
                <div className={cls.routerNav}>
                    {routerNavigations.map(({path, title}) => (
                        <Link key={path} to={path} className={cls.routeLink}>
                            {t(`${title}`)}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export { Header };
