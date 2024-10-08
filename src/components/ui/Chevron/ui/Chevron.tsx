import clsx from "clsx";
import cls from "./Chevron.module.scss";

interface IChevron {
    className?: string;
}

const Chevron = ({ className }: IChevron) => {
    return <span className={clsx(cls.Chevron, className)}></span>;
};

export { Chevron };
