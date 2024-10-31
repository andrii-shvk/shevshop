import cls from "./Header.module.scss";
import clsx from "clsx";
import { HeaderIconsList } from "./const";
import { Link, useNavigate } from "react-router-dom";
import { SearchInput } from "@/components/ui/SearchInput";
import { Icon } from "@/components/ui/Icon";
import { routerNavigations } from "@/const/router";
import { LangSwitcher } from "@/components/ui/LangSwitcher";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
import { AppLink } from "@/components/ui/AppLink";
import { useSelector } from "react-redux";
import { getWishItems } from "@/redux/wishlist/selectors/wishlistSelector";
import { useContext } from "react";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";
import { OpenPopup } from "@/components/ui/OpenPopup";
import { ReactComponent as Account } from "@/assets/icons/HeaderIcons/account.svg";
import {
    checkAuthLoading,
    isAuthenticated,
} from "@/redux/auth/selectors/authSelector";
import { useAuth } from "@/hooks/useAuth";
import { Loader } from "@/components/ui/Loader";

const Header = () => {
    const { setAccountOpen } = useContext(LayoutProvider);
    const { loginPopup, popup, registeredPopup } = useContext(LayoutProvider);
    const { t } = useTranslation();

    const favorites = useSelector(getWishItems);
    const isAuth = useSelector(isAuthenticated);
    const navigate = useNavigate();
    const authIsLoading = useSelector(checkAuthLoading);
    const { LogOut } = useAuth();

    const loginToAccount = () => {
        if (!isAuth) {
            setAccountOpen(true);
        } else {
            LogOut();
            navigate("/");
        }
    };
    const handleSearch = (query: string) => {
        console.log(query);
    };

    return (
        <header className={cls.header}>
            {popup && (
                <OpenPopup>
                    The product has been successfully added to MyBag!
                </OpenPopup>
            )}
            {loginPopup && (
                <OpenPopup variant="loginPopup">Login successfuly!</OpenPopup>
            )}
            {registeredPopup && (
                <OpenPopup variant="loginPopup">
                    Registered successfuly!
                </OpenPopup>
            )}
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
                        {authIsLoading ? (
                            <Loader width={30} height={30} />
                        ) : (
                            <>
                                <li className={cls.account_block}>
                                    <Icon
                                        Svg={Account}
                                        className={cls.Icon}
                                        clickable
                                        onClick={loginToAccount}
                                    />
                                    <p className={cls.iconTitle}>
                                        {isAuth ? "Logout" : "Login"}
                                    </p>
                                </li>
                                {HeaderIconsList.map(
                                    ({ name, SvgIcon, to }) => (
                                        <li
                                            key={name}
                                            className={`${
                                                name === "Search" ||
                                                name === "Home"
                                                    ? cls.hiddenIcon
                                                    : ""
                                            }`}
                                        >
                                            <Link
                                                to={to}
                                                className={cls.headerIcon}
                                            >
                                                <Icon
                                                    Svg={SvgIcon}
                                                    clickable
                                                    className={clsx(
                                                        cls.Icon,
                                                        name === "Wishlist" &&
                                                            favorites.length > 0
                                                            ? cls.wishItems
                                                            : ""
                                                    )}
                                                />
                                                <p className={cls.iconTitle}>
                                                    {t(name)}
                                                </p>
                                            </Link>
                                        </li>
                                    )
                                )}
                            </>
                        )}
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
