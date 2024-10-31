import clsx from "clsx";
import cls from "./Skeleton.module.scss";
import { Theme } from "@/const/general";

interface SkeletonProps {
    height: string;
    width: string;
    border?: string;
    className?: string;
    variantClass?: Theme;
}

const Skeleton = ({
    height,
    width,
    border,
    className,
    variantClass = "light",
}: SkeletonProps) => {
    const style = {
        height,
        width,
        borderRadius: border,
    };
    return (
        <div
            className={clsx(cls.skeleton, className, cls[variantClass])}
            style={style}
        />
    );
};

export { Skeleton };
