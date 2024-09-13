import { ChangeEvent, useState } from "react";
import cls from "./SearchInput.module.scss";

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
        <input
            type="search"
            value={queryString}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={cls.searchInput}
        />
    );
};

export { SearchInput };
