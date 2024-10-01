import { Link } from "react-router-dom";
import cls from "./Footer.module.scss";
import { Icon } from "@/components/ui/Icon";
import { footerSiteLinks } from "@/const/router";
import { SOCIAL_LINKS } from "@/const/general";
import * as IMAGES from "@/const/images";

const Footer = () => {
    return (
        <section className={cls.Footer}>
            <div className="container">
                <div className={cls.background}>
                    <div className={cls.brandSocial}>
                        <img
                            src={IMAGES.LOGO_IMG}
                            alt="Love the sales logo"
                            className={cls.logoImg}
                        />
                        <p className={cls.slogan}>
                            Pay less for the brands you Love <br /> with
                            LovetheSales.com.
                        </p>
                        <div className={cls.socialLinks}>
                            {SOCIAL_LINKS.map((socialLink, idx) => (
                                <Link to={socialLink.to} key={idx}>
                                    <Icon Svg={socialLink.icon} className={cls.socialIcon} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className={cls.siteLinks}>
                        {footerSiteLinks?.map((siteLink, idx) => (
                            <div className={cls.siteLinks_block} key={idx}>
                                <h3 className={cls.linkHeader}>
                                    {siteLink.linkHeader}
                                </h3>
                                <ul className={cls.link_ul}>
                                    {siteLink?.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link
                                                to={link.link}
                                                className={cls.link}
                                            >
                                                {link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={cls.locationTrust}>
                        <div className={cls.flagLogo}>
                            <img
                                src={IMAGES.ENG_LOGO}
                                alt="EngLogo"
                                className={cls.flagLogo_img}
                            />
                            <p className={cls.engLogo_title}>United Kingdom</p>
                        </div>
                        <img
                            src={IMAGES.GOOGLEPLAY_IMG}
                            alt="GooglePlay"
                            className={cls.googlePlay_img}
                        />
                    </div>
                </div>
            </div>
            <div className={cls.copyright}>
                © 2024 Love the Sales Limited. All rights reserved. We may earn
                a commission when you use one of our links to make a purchase.
            </div>
        </section>
    );
};

export { Footer };
