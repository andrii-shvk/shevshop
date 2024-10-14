import { Icon } from "@/components/ui/Icon";
import cls from "./WishListPage.module.scss";
import { ReactComponent as HeartIcon } from "@/assets/icons/HeaderIcons/wishlist.svg";
import { Button } from "@/components/ui/Button";
import { ThemeEnum } from "@/const/general";
import { Card } from "@/components/ui/Card";
import { useSelector } from "react-redux";
import { getWishItems } from "@/redux/wishlist/selectors/wishlistSelector";
import { useDispatch } from "react-redux";
import { toggleItemWishList } from "@/redux/wishlist/slice/wishlistSlice";
import { AppDispatch } from "@/redux/store";
import { getClothingItem } from "@/redux/clothingItem/selectors/clothingItemSelector";
import { fetchClothingItem } from "@/redux/clothingItem/services/fetchClothingItem";
import { IClientProduct } from "@/models";

const WishListPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector(getWishItems);
    const clothingItem = useSelector(getClothingItem);

    const getItToMyBag = (CardItem: IClientProduct) => {
        dispatch(
            fetchClothingItem({ category: CardItem.category, id: CardItem.id })
        );
    };

    const handleWishlistToggle = (item: IClientProduct) => {
        dispatch(toggleItemWishList(item));
    };

    return (
        <section className="container">
            <div className={cls.WishListPage}>
                <h1 className={cls.wishlist_header}>My shortlist</h1>
                {favorites.length > 0 ? (
                    <div className={cls.wishlist_cards}>
                        {favorites.map((item) => (
                            <Card
                                key={item.id}
                                CardItem={item}
                                isFavItem
                                addToWishlist={() => handleWishlistToggle(item)}
                                clothingItem={clothingItem}
                                getItToMyBag={getItToMyBag}
                            />
                        ))}
                    </div>
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
