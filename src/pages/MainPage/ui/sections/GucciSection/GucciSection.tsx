import { Link } from "react-router-dom";
import cls from "./GucciSection.module.scss";
import { useGetManClothingQuery, useGetWomanClothingQuery } from "@/api/rtkApi";
import { useTranslation } from "react-i18next";
import { Chevron } from "@/components/ui/Chevron";
import { ClothingCarousel } from "@/widgets/ClothingCarousel";

const GucciSection = () => {
    const {
        data: manClothing,
        isLoading: manIsLoading,
        error: manError,
    } = useGetManClothingQuery();
    const {
        data: womanClothing,
        isLoading: womanIsLoading,
        error: womanError,
    } = useGetWomanClothingQuery();
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
                            <Chevron className={cls.chevron} />
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
                <ClothingCarousel
                    clothingItems={manClothing}
                    isLoading={manIsLoading}
                    error={manError}
                />
                <ClothingCarousel
                    clothingItems={womanClothing}
                    isLoading={womanIsLoading}
                    error={womanError}
                />
            </div>
        </section>
    );
};

export default GucciSection;
