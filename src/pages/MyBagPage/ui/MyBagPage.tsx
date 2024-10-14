import { Chevron } from "@/components/ui/Chevron";
import cls from "./MyBagPage.module.scss";
import * as IMAGES from "@/const/images";
import { Button } from "@/components/ui/Button";
import { ThemeEnum } from "@/const/general";
import { IClientProduct } from "@/models";
import { useSelector } from "react-redux";
import { getBagItems } from "@/redux/bag/selectors/bagSelector";
import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "@/redux/bag/slice/bagSlice";
import { calcTotalPrice } from "@/const/calcTotalPrice";
import { AppDispatch } from "@/redux/store";

const MyBagPage = () => {
    const bagItems = useSelector(getBagItems);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <section className={cls.MyBagPage}>
            <div className="container">
                <div className={cls.header}>
                    <h1 className={cls.header_title}>My bag</h1>
                    <p className={cls.header_subtitle}>
                        Items are not yet reserved
                    </p>
                </div>
                <div className={cls.mybag}>
                    <div className={cls.mybag_block}>
                        <div className={cls.mybag_offers}>
                            <h2 className={cls.mybag_title}>Offers</h2>
                            <div className={cls.offers_block}>
                                <p className={cls.offers_span}>
                                    Spend £43.88 more with this marketplace
                                    seller to get free delivery.
                                </p>
                                <Chevron className={cls.offers_chevron} />
                            </div>
                        </div>
                        <div className={cls.mybag_cart}>
                            <p className={cls.cart_mail}>
                                Standard (Royal Mail)
                            </p>
                            <div className={cls.cart_flagLogo_block}>
                                <img
                                    src={IMAGES.ENG_LOGO}
                                    alt="EngLogo"
                                    className={cls.flagLogo_img}
                                />
                                <p className={cls.cart_flagLogo_title}>
                                    Sending from our marketplace seller in the
                                    United Kingdom
                                </p>
                            </div>
                            <p className={cls.delivery_estimate}>
                                Get it by Wed 09 Oct
                            </p>
                            <p className={cls.delivery_estimate}>
                                (Or Mon 07 with next day delivery)
                            </p>
                            <p className={cls.cart_hr_lane}></p>
                            <div className={cls.items_container}>
                                {bagItems?.map((item: IClientProduct) => (
                                    <article key={item.id}>
                                        <div className={cls.cart_applied}>
                                            Code applied: 16OFF
                                        </div>
                                        <div className={cls.item_details_container}>
                                            <img
                                                src={item.image}
                                                alt="cart_img"
                                                className={cls.item_img}
                                            />
                                            <div className={cls.item_details}>
                                                <div
                                                    className={cls.item_description}>
                                                    <div
                                                        className={cls.item_title_block}
                                                    >
                                                        <h3 className={cls.item_title}>
                                                            {item.title}
                                                        </h3>
                                                        <p
                                                            className={cls.item_description}
                                                        >
                                                            {item.description?.slice(0, 35)}...
                                                        </p>
                                                    </div>
                                                    <div>
                                                        <p
                                                            className={cls.item_price}
                                                        >
                                                            $ {item.price}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className={cls.item_quantity_container}>
                                                    <Button 
                                                        variant={ThemeEnum.plusMinus} 
                                                        onClick={() => dispatch(decreaseItem(item))}
                                                    >
                                                        -
                                                    </Button>
                                                        <div className={cls.item_quantity}>
                                                            {item.quantity}
                                                        </div>
                                                    <Button 
                                                        variant={ThemeEnum.plusMinus} 
                                                        onClick={() => dispatch(increaseItem(item))}
                                                    >
                                                        +
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={cls.payment_block}>
                        <h1 className={cls.payment_title}>Checkout</h1>
                        <p className={cls.cart_hr_lane}></p>
                        <div className={cls.payment_details_container}>
                            <p>$ {calcTotalPrice(bagItems).toFixed(2)}</p>
                            <p>Subtotal</p>
                            <p className={cls.payment_discount}>$ -0.00</p>
                            <p className={cls.payment_discount}>Discount</p>
                            <p>$ 4.99</p>
                            <p>Estimated delivery</p>
                        </div>
                        <p className={cls.cart_hr_lane}></p>
                        <div className={cls.total_price}>
                            <h1 className={cls.total_price_title}>Total</h1>
                            <p className={cls.total_price_num}>$ {(calcTotalPrice(bagItems) + 4.99).toFixed(2)}</p>
                        </div>
                        <p className={cls.terms}>
                            By purchasing you agree to our{" "}
                            <u>terms and conditions.</u>
                        </p>
                        <div className={cls.payment_btns}>
                            <Button
                                variant={ThemeEnum.light}
                                className={cls.btn_klarna}
                            >
                                Klarna.
                            </Button>
                            <Button variant={ThemeEnum.dark}>
                                Checkout with card
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={cls.pay_info}>
                    <h1 className={cls.pay_green}>Security your pay</h1>
                    <p>We use Stripe to provide a secure & fast checkout.</p>
                    <p className={cls.pay_green}>
                        Connecting you with 100s of retailers
                    </p>
                    <p className={cls.pay_info_footer}>
                        SHEVSHOP enables you to buy from multiple retailers in
                        one checkout. We will send your order to these stores
                        securely, who will then process it and deliver your
                        items.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MyBagPage;
