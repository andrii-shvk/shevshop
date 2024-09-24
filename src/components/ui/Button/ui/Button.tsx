import clsx from "clsx";
import cls from "./Button.module.scss";
import { Theme, ThemeEnum } from "@/const/general";

interface BtnProps {
    children: string;
    className?: string;
    onClick?: () => void;
    variant?: Theme;
    active?: boolean;
}

type ThemeVariants = {
    light: ThemeEnum.light;
    dark: ThemeEnum.dark;
};

const Button = ({
    children,
    className,
    onClick,
    variant = "light",
    active = false,
}: BtnProps) => {

    const variantClasses: ThemeVariants = {
        light: ThemeEnum.light,
        dark: ThemeEnum.dark,
    };
    
    const variantClass = variantClasses[variant] || ThemeEnum.light;

    return (
        <button
            className={clsx(cls.btn, className, cls[variantClass], {
                [cls.active]: active,
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export { Button };
