import { IClientProduct } from "@/models";
import cls from "./ClothingCarousel.module.scss";
import { CarouselCards } from "@/widgets/CarouselCards";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

interface ClothingCarouselProps {
    clothingItems: IClientProduct[] | null | undefined;
    isLoading: boolean;
    error: FetchBaseQueryError | SerializedError | undefined;
}

const ClothingCarousel = ({
    clothingItems,
    isLoading,
    error,
}: ClothingCarouselProps) => {
    return (
        <div className={cls.cardsBlock}>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>Error fetching</h1>}
            {clothingItems && <CarouselCards CardItems={clothingItems} />}
        </div>
    );
};

export { ClothingCarousel };
