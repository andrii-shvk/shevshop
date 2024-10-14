import { IClientProduct } from "@/models";
import cls from "./ModalItemLayout.module.scss";
import { Button } from "../../Button";
import * as IMAGES from "@/const/images";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addItemToBag } from "@/redux/bag/slice/bagSlice";
import { useContext } from "react";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";

interface ModalItemLayoutProps {
    Item: IClientProduct;
    openModal?: boolean;
    onClose?: (value: boolean) => void;
}

const ModalItemLayout = ({ Item, onClose }: ModalItemLayoutProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { openPopup } = useContext(LayoutProvider);

    const addItem = (Item: IClientProduct) => {
        dispatch(addItemToBag(Item));
        onClose!(false);
        openPopup()
    };

    return (
        <div className={cls.body}>
            <img src={Item.image} alt={Item.title} className={cls.image} />
            <div className={cls.content}>
                <div className={cls.content_header}>
                    <div className={cls.content_title_block}>
                        <img
                            src={IMAGES.LOGO_IMG}
                            alt="Love the sales logo"
                            className={cls.logoImg}
                        />
                        <h3 className={cls.title}>{Item.title}</h3>
                    </div>
                    <p className={cls.price}>$ {Item.price}</p>
                </div>
                <Button
                    className={cls.footer_btn}
                    onClick={() => addItem(Item)}
                >
                    Add Item
                </Button>
            </div>
        </div>
    );
};

export { ModalItemLayout };
