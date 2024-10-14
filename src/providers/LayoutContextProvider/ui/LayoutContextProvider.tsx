import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from "react";

interface ILayoutContext {
    popup: boolean;
    setPopup: Dispatch<SetStateAction<boolean>>;
    openPopup: () => void;
}

export const LayoutProvider = createContext({} as ILayoutContext);

export const LayoutContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [popup, setPopup] = useState<boolean>(false);

    const openPopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 3000);
    };

    const value = {
        popup,
        setPopup,
        openPopup,
    };

    return (
        <LayoutProvider.Provider value={value}>
            {children}
        </LayoutProvider.Provider>
    );
};
