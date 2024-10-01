import { Icon } from "@/components/ui/Icon";
import cls from "./WishListPage.module.scss";
import { ReactComponent as HeartIcon } from "@/assets/icons/HeaderIcons/wishlist.svg";
import { Button } from "@/components/ui/Button";
import { ThemeEnum } from "@/const/general";
import { useFavorites } from "@/hooks/useFavorites";
import { Card } from "@/components/ui/Card";

const WishListPage = () => {
    const { favorites, toggleFav } = useFavorites();
    return (
        <section className="container">
            <div className={cls.WishListPage}>
                <h1 className={cls.wishlist_header}>My shortlist</h1>
                {favorites.length > 0 ? (
                    <article className={cls.wishlist_cards}>
                        {favorites.map((item) => (
                            <Card key={item.id} CardItem={item} toggleFav={toggleFav} isFavItem={favorites?.some(
                                (favItem) => favItem.id === item.id
                            )} />
                        ))}
                    </article>
                ) : (
                    <div className={cls.wishlist_block}>
                        <h2 className={cls.wishlist_title}>
                            Nothing here yet...
                        </h2>
                        <Icon Svg={HeartIcon} />
                        <p className={cls.wishlist_subtitle}>
                            Save items and be notified when they drop in price.
                        </p>
                        <Button
                            variant={ThemeEnum.dark}
                            className={cls.wishlist_btn}
                        >
                            Sign in
                        </Button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default WishListPage;
