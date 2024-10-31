import cls from "./OpenPopup.module.scss";

interface OpenPopupProps {
    children: string;
    variant?: "primaryPopup" | "loginPopup";
}

const OpenPopup = ({ children, variant = "primaryPopup" }: OpenPopupProps) => {
    return <div className={cls[variant]}>{children}</div>;
};

export { OpenPopup };
