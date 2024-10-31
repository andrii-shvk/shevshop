import { ReactComponent as Home } from "@/assets/icons/HeaderIcons/home.svg";
import { ReactComponent as Wishlist } from "@/assets/icons/HeaderIcons/wishlist.svg";
import { ReactComponent as MyBag } from "@/assets/icons/HeaderIcons/mybag.svg";
import { ReactComponent as Search } from "@/assets/icons/HeaderIcons/search.svg";

interface IconsType {
    name: string;
    SvgIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    to: string;
}

export const HeaderIconsList: IconsType[] = [
    { name: "Home", SvgIcon: Home, to: "/" },
    { name: "Wishlist", SvgIcon: Wishlist, to: "/wishlist" },
    { name: "MyBag", SvgIcon: MyBag, to: "/my-bag" },
    { name: "Search", SvgIcon: Search, to: "/" },
];
