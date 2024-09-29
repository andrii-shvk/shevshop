import { IProduct } from "@/models";
import cls from "./Card.module.scss";
import { Icon } from "../../Icon";
import { ReactComponent as WishList } from "@/assets/icons/HeaderIcons/wishlist.svg";
import clsx from "clsx";

interface CardProps {
    CardItem: IProduct;
    exclusive?: boolean;
    isFavItem?: boolean;
    toggleFav?: (favItem: IProduct) => void;
}

const Card = ({ CardItem, exclusive, isFavItem, toggleFav }: CardProps) => {
    return (
        <>
            <article className={cls.Card}>
                <button onClick={() => toggleFav!(CardItem)}>
                    <Icon
                        Svg={WishList}
                        className={clsx(
                            cls.wishlistIcon,
                            `${isFavItem ? cls.wishIconActive : ""}`
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
                </div>
            </article>
        </>
    );
};

export { Card };
