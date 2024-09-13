import cls from "./Header.module.scss";
import { HeaderIconsList } from "./const";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { SearchInput } from "@/components/ui/SearchInput";
import { Icon } from "@/components/ui/Icon";

interface HeaderProps {}

const Header = (props: HeaderProps) => {
    const {} = props;

    const handleSearch = (query: string) => {
        console.log(query)
    }

    return (
        <header className={cls.header}>
            <div className={cls.container}>
                <div className={cls.content}>

                    <Link to={'/'} className={cls.logoTitle}>SHEVSHOP</Link>
                    <SearchInput
                        onSearch={handleSearch} 
                        placeholder="Search for brands, items..."
                    />

                    <div className={cls.icons}>
                        {HeaderIconsList.map(({ name, SvgIcon }) => (
                            <div key={name}
                                className={clsx(
                                    cls.headerIcon,
                                    (name === "Search" || name === "Home") ? cls.hiddenIcon : "")}>
                                <Icon Svg={SvgIcon} clickable />
                                <p className={cls.hiddenIcon}>{name}</p>
                            </div>
                        ))}
                        <p>EN</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export { Header };
