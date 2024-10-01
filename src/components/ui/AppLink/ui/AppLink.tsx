import { NavLink } from "react-router-dom";
import cls from "./AppLink.module.scss";
import clsx from "clsx";

interface AppLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    activeClassName?: string;
    onClick?: () => void;
}

const AppLink = ({
    to,
    children,
    className = "",
    activeClassName = "",
    onClick,
}: AppLinkProps) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => {
                return clsx(className, {
                    [activeClassName]: isActive,
                });
            }}
            onClick={onClick}
        >
            {children}
        </NavLink>
    );
};

export { AppLink };
