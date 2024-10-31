import cls from "./CarouselSkeleton.module.scss";
import { CardSkeleton } from "@/components/ui/CardSkeleton";

const CarouselSkeleton = () => {
    return (
        <div className={cls.carouselSkeleton}>
            {new Array(4).fill(0).map((_, i) => (
                <CardSkeleton key={i} />
            ))}
        </div>
    );
};

export { CarouselSkeleton };
