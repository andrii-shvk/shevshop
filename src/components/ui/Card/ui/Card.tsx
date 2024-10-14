import { IClientProduct } from "@/models";
import cls from "./Card.module.scss";
import { Icon } from "../../Icon";
import { ReactComponent as WishList } from "@/assets/icons/HeaderIcons/wishlist.svg";
import clsx from "clsx";
import { Button } from "../../Button";
import { ThemeEnum } from "@/const/general";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Modal } from "../../Modal";
import { ModalItemLayout } from "../../ModalItemLayout";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";

interface CardProps {
    CardItem: IClientProduct;
    clothingItem?: IClientProduct;
    exclusive?: boolean;
    addToBag?: (CardItem: IClientProduct) => void;
    removeFromBag?: (CardItem: IClientProduct) => void;
    isFavItem?: boolean;
    addToWishlist?: (CardItem: IClientProduct) => void;
    getItToMyBag?: (CardItem: IClientProduct) => void;
}

const Card = ({
    CardItem,
    exclusive,
    addToWishlist,
    isFavItem,
    addToBag,
    clothingItem,
    getItToMyBag,
}: CardProps) => {
    const location = useLocation();
    const { openPopup } = useContext(LayoutProvider);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const addToBagItem = () => {
        if (addToBag) {
            addToBag(CardItem);
            openPopup();
        }
    };

    const getItToModalWindow = () => {
        if (getItToMyBag) {
            getItToMyBag(CardItem);
            setOpenModal(true);
        } else {
            console.warn("getItToMyBag is not provided");
        }
    };

    return (
        <>
            <article className={cls.Card}>
                <button
                    onClick={() => addToWishlist && addToWishlist(CardItem)}
                >
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
                                onClick={addToBagItem}
                            >
                                Add to MyBag
                            </Button>
                        </div>
                    )}
                    {location.pathname === "/wishlist" && (
                        <Button
                            variant={ThemeEnum.dark}
                            className={cls.card_btn}
                            onClick={getItToModalWindow}
                        >
                            Get it now
                        </Button>
                    )}
                </div>
                {clothingItem && (
                    <Modal
                        isOpen={openModal}
                        onClose={() => setOpenModal(false)}
                    >
                        <ModalItemLayout
                            Item={clothingItem}
                            openModal={openModal}
                            onClose={() => setOpenModal(false)}
                        />
                    </Modal>
                )}
            </article>
        </>
    );
};

export { Card };
