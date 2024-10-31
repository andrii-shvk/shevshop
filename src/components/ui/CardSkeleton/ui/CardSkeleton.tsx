import { Skeleton } from "../../Skeleton";
import cls from "./CardSkeleton.module.scss";

const CardSkeleton = () => {
    return (
        <div className={cls.cardSkeleton}>
            <Skeleton width="270px" height="345px" />
            <div className={cls.description}>
                <Skeleton width="100px" height="14px" border="2px" />
                <Skeleton width="100px" height="17px" border="2px" />
                <Skeleton width="200px" height="15px" border="2px" />
                <Skeleton width="90px" height="25px" border="2px" />
                <Skeleton width="250px" height="50px" border="5px" />
            </div>
        </div>
    );
};

export { CardSkeleton };
