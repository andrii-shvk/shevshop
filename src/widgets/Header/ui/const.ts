import { ReactComponent as Home } from "@/assets/icons/HeaderIcons/home.svg";
import { ReactComponent as Account } from "@/assets/icons/HeaderIcons/account.svg";
import { ReactComponent as Wishlist } from "@/assets/icons/HeaderIcons/wishlist.svg";
import { ReactComponent as MyBag } from "@/assets/icons/HeaderIcons/mybag.svg";
import { ReactComponent as Search } from "@/assets/icons/HeaderIcons/search.svg";

interface IconsType {
    name: string;
    SvgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

export const HeaderIconsList: IconsType[] = [
    { name: "Home", SvgIcon: Home },
    { name: "Account", SvgIcon: Account },
    { name: "Wishlist", SvgIcon: Wishlist },
    { name: "MyBag", SvgIcon: MyBag },
    { name: "Search", SvgIcon: Search },
];
