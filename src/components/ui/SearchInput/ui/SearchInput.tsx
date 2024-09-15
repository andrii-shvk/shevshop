import { ChangeEvent, useState } from "react";
import cls from "./SearchInput.module.scss";
import { Icon } from "../../Icon";
import { ReactComponent as Search } from "@/assets/icons/search.svg";

interface SearchInputProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchInput = ({
    placeholder = "Search...",
    onSearch,
}: SearchInputProps) => {
    const [queryString, setQueryString] = useState<string>("");

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setQueryString(e.target.value);
        onSearch(e.target.value);
    };

    return (
        <div className={cls.searchInput}>
            <input
                type="search"
                value={queryString}
                onChange={handleInputChange}
                placeholder={placeholder}
                className={cls.Input}
            />
            <Icon Svg={Search} className={cls.Icon} clickable />
        </div>
    );
};

export { SearchInput };
