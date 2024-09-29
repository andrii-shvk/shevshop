import { Link } from "react-router-dom";
import cls from "./GucciSection.module.scss";
import { useGetAllClothingQuery } from "@/api/rtkApi";
import { CarouselCards } from "@/widgets/CarouselCards";
import { useTranslation } from "react-i18next";

const GucciSection = () => {
    const { data: clothing } = useGetAllClothingQuery(1);
    const { t } = useTranslation();

    return (
        <section className={cls.section}>
            <div className={cls.content}>
                <div className={cls.contentInfo}>
                    <div className={cls.contentBlock}>
                        <h1 className={cls.title}>Gucci</h1>
                        <p className={cls.subtitle}>{t("GucciDescription")}</p>
                        <Link to={"/"} className={cls.link}>
                            {t("SeeMore")}
                            <span className={cls.chevron}></span>
                        </Link>
                    </div>
                    <div className={cls.imgBlock}>
                        <img
                            src="https://ltsimages.blob.core.windows.net/trends/130_Square_327784137.jpg"
                            className={cls.img}
                        />
                        <img
                            src="https://ltsimages.blob.core.windows.net/trends/86_Portrait_784828858.jpg"
                            className={cls.img}
                        />
                    </div>
                </div>

                <div className={cls.cardsBlock}>
                    {clothing && <CarouselCards CardItems={clothing} />}
                </div>
            </div>
        </section>
    );
};

export default GucciSection;
