import cls from "./CarouselCards.module.scss";
import { IClientProduct } from "@/models";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card } from "@/components/ui/Card";
import { A11y, EffectFade, Navigation, Pagination } from "swiper/modules";
import { useSelector } from "react-redux";
import { getWishItems } from "@/redux/wishlist/selectors/wishlistSelector";
import { useDispatch } from "react-redux";
import { toggleItemWishList } from "@/redux/wishlist/slice/wishlistSlice";
import { addItemToBag } from "@/redux/bag/slice/bagSlice";

interface CarouselCardsProps {
    CardItems: IClientProduct[];
}

const CarouselCards = ({ CardItems }: CarouselCardsProps) => {
    const dispatch = useDispatch();
    const favorites = useSelector(getWishItems);

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
                        addToBag={() => dispatch(addItemToBag(item))}
                        isFavItem={
                            !!favorites.find(
                                (favItem) => favItem.id === item.id
                            )
                        }
                        addToWishlist={() => dispatch(toggleItemWishList(item))}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export { CarouselCards };
