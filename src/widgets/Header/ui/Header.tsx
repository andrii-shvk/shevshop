import cls from "./Header.module.scss";
import { HeaderIconsList } from "./const";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components/ui/SearchInput";
import { Icon } from "@/components/ui/Icon";
import { routerNavigations } from "@/const/router";
import { LangSwitcher } from "@/components/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import clsx from "clsx";
import { useFavorites } from "@/hooks/useFavorites";
import { useEffect, useState } from "react";
import { AppLink } from "@/components/ui/AppLink";

const Header = () => {
    const { t } = useTranslation();

    const handleSearch = (query: string) => {
        console.log(query);
    };

    const { favorites } = useFavorites();

    const [isFav, setIsFav] = useState<boolean>(favorites.length > 0);

    useEffect(() => {
        setIsFav(favorites.length > 0);
    }, [favorites]);

    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>
                    <Link to={"/"} className={cls.logoTitle}>
                        SHEVSHOP
                    </Link>

                    <SearchInput
                        onSearch={handleSearch}
                        placeholder={t("SearchInput")}
                    />

                    <ul className={cls.icons}>
                        {HeaderIconsList.map(({ name, SvgIcon, to }) => (
                            <li
                                key={name}
                                className={`${
                                    name === "Search" || name === "Home"
                                        ? cls.hiddenIcon
                                        : ""
                                }`}
                            >
                                <Link to={to} className={cls.headerIcon}>
                                    <Icon
                                        Svg={SvgIcon}
                                        clickable
                                        className={clsx(
                                            cls.Icon,
                                            name === "Wishlist" && isFav
                                                ? cls.wishItems
                                                : ""
                                        )}
                                    />
                                    <p className={cls.iconTitle}>{t(name)}</p>
                                </Link>
                            </li>
                        ))}
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </ul>
                </div>
                <nav className={cls.routerNav}>
                    {routerNavigations.slice(0, 4).map(({ path, title }) => (
                        <div className={cls.navlinkBlock} key={title}>
                            <AppLink
                                key={path}
                                to={path}
                                className={cls.routeLink}
                                activeClassName={cls.routeLink_active}
                            >
                                {t(`${title}`)}
                            </AppLink>
                        </div>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export { Header };
