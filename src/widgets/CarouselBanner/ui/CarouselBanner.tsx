import { useGetBannerGoodsQuery } from "@/api/rtkApi";
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
import { Skeleton } from "@/components/ui/Skeleton";

SwiperCore.use([Navigation, Pagination]);

const CarouselBanner = () => {
    const { data: bannerGoods, isLoading, error } = useGetBannerGoodsQuery();
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
    const bannerSkeleton = new Array(1).fill(0).map((_, i) => (
        <div className={cls.bannerCard} key={i}>
            <div className={cls.imgCard} style={{background: "#1c1a1a73"}}>
                <Skeleton height="580px" width="580px" border="8px" variantClass="dark" />
            </div>
            <div className={cls.bannerInfo}>
                <Skeleton height="40px" width="200px" border="3px" variantClass="dark" />
                <Skeleton height="20px" width="250px" border="3px" variantClass="dark" />
                    <Skeleton width="370px" height="20px" border="4px" variantClass="dark" />
                <Skeleton width="182px" height="40px" border="8px" variantClass="dark" />
            </div>
        </div>
    ));

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
                {isLoading && bannerSkeleton}
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
                {error && <h1 className={cls.error}>Sorry... Can not get the data!</h1>}
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
