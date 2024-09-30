import cls from "./CarouselCards.module.scss"
import { IProduct } from "@/models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/components/ui/Card";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useFavorites } from "@/hooks/useFavorites";

interface CarouselCardsProps {
    CardItems: IProduct[];
}

const CarouselCards = ({ CardItems }: CarouselCardsProps) => {
    const { favorites, toggleFav } = useFavorites();
    return (
        <Swiper
            modules={[EffectFade, Navigation, Pagination, A11y]}
            speed={1200}
            slidesPerView={3}
            navigation
            className={cls.swiper}
        >
            {CardItems?.map((item, idx) => (
                <SwiperSlide key={idx}>
                    <Card
                        CardItem={item}
                        exclusive
                        toggleFav={toggleFav}
                        isFavItem={favorites?.some(
                            (favItem) => favItem.id === item.id
                        )}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { CarouselCards };
