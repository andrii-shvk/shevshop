import { ReactComponent as Home } from "@/assets/icons/home.svg";
import { ReactComponent as Account } from "@/assets/icons/account.svg";
import { ReactComponent as Wishlist } from "@/assets/icons/wishlist.svg";
import { ReactComponent as MyBag } from "@/assets/icons/mybag.svg";
import { ReactComponent as Search } from "@/assets/icons/search.svg";

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
