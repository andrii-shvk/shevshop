import { useGetAllClothingQuery } from "@/api/rtkApi";
import cls from "./CarouselBanner.module.scss";
import { Button } from "@/components/ui/Button";
import { ThemeEnum } from "@/const/general";
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import {
    A11y,
    Autoplay,
    EffectFade,
    Navigation,
    Pagination,
} from "swiper/modules";
import "./CarouselBanner.css";
import { Icon } from "@/components/ui/Icon";
import { ReactComponent as NextIcon } from "@/assets/icons/Arrows/arrow-next.svg";
import { ReactComponent as PrevIcon } from "@/assets/icons/Arrows/arrow-prev.svg";
import { useRef } from "react";
import SwiperCore from "swiper";

SwiperCore.use([Navigation, Pagination]);

const CarouselBanner = () => {
    const { data: clothing, isLoading, error } = useGetAllClothingQuery(1);

    const swiperRef = useRef<SwiperCore>();

    const handlePrevClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };
    const handleNextClick = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
        <section className={cls.CarouselBanner}>
            <div className="container">
                <Swiper
                    modules={[
                        Autoplay,
                        EffectFade,
                        Navigation,
                        Pagination,
                        A11y,
                    ]}
                    autoplay={{ delay: 4000 }}
                    speed={1200}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {clothing?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <div className={cls.bannerCard}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={cls.img}
                                />
                                <div className={cls.bannerInfo}>
                                    <h1 className={cls.title}>{item.title}</h1>
                                    <p className={cls.description}>
                                        {item.description.slice(0, 90)}...
                                    </p>
                                    <div className={cls.infoBg}>
                                        <span className={cls.info}>
                                            Popular - over 5000+ have shopped
                                            this recently
                                        </span>
                                    </div>
                                    <Button
                                        className={cls.btn}
                                        variant={ThemeEnum.dark}
                                    >
                                        Shop now
                                    </Button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className={cls.arrows}>
                    <button className="custom-prev" onClick={handlePrevClick}>
                        <Icon Svg={NextIcon} />
                    </button>
                    <button className="custom-next" onClick={handleNextClick}>
                        <Icon Svg={PrevIcon} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export { CarouselBanner };
