import { useGetAllClothingQuery, useGetBannerGoodsQuery } from "@/api/rtkApi";
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
import { useTranslation } from "react-i18next";

SwiperCore.use([Navigation, Pagination]);

const CarouselBanner = () => {
    const { data: bannerGoods, isLoading, error } = useGetBannerGoodsQuery(1);
    const { t } = useTranslation();

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
            <Swiper
                modules={[Autoplay, EffectFade, Navigation, Pagination, A11y]}
                autoplay={{ delay: 8000 }}
                speed={1200}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true, type: "bullets" }}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {bannerGoods?.map((item, idx) => (
                    <SwiperSlide key={idx}>
                        <div className={cls.bannerCard}>
                            <div className={cls.imgCard}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={cls.img}
                                />
                            </div>
                            <div className={cls.bannerInfo}>
                                <h1 className={cls.title}>{item.title}</h1>
                                <p className={cls.description}>
                                    {item.description}
                                </p>
                                <div className={cls.infoBg}>
                                    <span className={cls.info}>
                                        {t("PopularCarousel")}
                                    </span>
                                </div>
                                <Button
                                    className={cls.btn}
                                    variant={ThemeEnum.dark}
                                >
                                    {t("ShopNow")}
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
            <div className={cls.bannerBtn}>
                <Button variant={ThemeEnum.light} className={cls.salesBtn}>
                    {t("PersonaliseBtn")}
                </Button>
            </div>
        </section>
    );
};

export { CarouselBanner };
