import clsx from "clsx";
import cls from "./Button.module.scss";
import { ThemeEnum } from "@/const/general";

interface BtnProps {
    children: string;
    className?: string;
    onClick?: () => void;
    variant?: ThemeEnum;
    active?: boolean;
    disabled?: boolean
}

const Button = ({
    children,
    className,
    onClick,
    variant = ThemeEnum.light,
    active = false,
    disabled = false,
}: BtnProps) => {
    return (
        <button
            className={clsx(cls.btn, className, cls[variant], {
                [cls.active]: active,
                [cls.disabled]: disabled
            })}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export { Button };
