import { IClientProduct } from "@/models";
import cls from "./Card.module.scss";
import { Icon } from "../../Icon";
import { ReactComponent as WishList } from "@/assets/icons/HeaderIcons/wishlist.svg";
import clsx from "clsx";
import { Button } from "../../Button";
import { ThemeEnum } from "@/const/general";
import { Link, useLocation } from "react-router-dom";

interface CardProps {
    CardItem: IClientProduct;
    exclusive?: boolean;
    addToBag?: (CardItem: IClientProduct) => void;
    removeFromBag?: (CardItem: IClientProduct) => void;
    isFavItem?: boolean;
    addToWishlist?: (CardItem: IClientProduct) => void;
}

const Card = ({
    CardItem,
    exclusive,
    addToWishlist,
    isFavItem,
    addToBag,
}: CardProps) => {
    const location = useLocation();

    return (
        <>
            <article className={cls.Card}>
                <button onClick={() => addToWishlist!(CardItem)}>
                    <Icon
                        Svg={WishList}
                        className={clsx(
                            cls.wishlistIcon,
                            isFavItem ? cls.wishIconActive : ""
                        )}
                    />
                </button>
                <div className={cls.img}>
                    <img src={CardItem.image} alt={CardItem.title} />
                </div>
                <div className={cls.cardInfo}>
                    {exclusive && <p className={cls.header}>Exclusive</p>}
                    <h3 className={cls.brand}>{CardItem.title}</h3>
                    <p className={cls.name}>
                        {CardItem.description?.slice(0, 30)}...
                    </p>
                    <p className={cls.price}>$ {CardItem.price}</p>
                    {location.pathname === "/" && (
                        <div className={cls.card_btn_wrap}>
                            <Button
                                variant={ThemeEnum.dark}
                                className={cls.card_btn}
                                onClick={() => addToBag!(CardItem)}
                            >
                                Add to MyBag
                            </Button>
                        </div>
                    )}
                    {location.pathname === "/wishlist" && (
                        <Link to={"/my-bag"} className={cls.card_btn_wrap}>
                            <Button
                                variant={ThemeEnum.dark}
                                className={cls.card_btn}
                                onClick={() => addToBag!(CardItem)}
                            >
                                Get it now
                            </Button>
                        </Link>
                    )}
                </div>
            </article>
        </>
    );
};

export { Card };
