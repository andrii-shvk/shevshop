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
    isAccountOpen: boolean;
    setAccountOpen: Dispatch<SetStateAction<boolean>>;
    closeAccountWindow: () => void;
    loginPopup: boolean;
    setLoginPopup: Dispatch<SetStateAction<boolean>>;
    registeredPopup: boolean;
    setRegisteredPopup: Dispatch<SetStateAction<boolean>>;
}

export const LayoutProvider = createContext({} as ILayoutContext);

export const LayoutContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [popup, setPopup] = useState<boolean>(false);
    const [loginPopup, setLoginPopup] = useState<boolean>(false);
    const [registeredPopup, setRegisteredPopup] = useState<boolean>(false);
    const [isAccountOpen, setAccountOpen] = useState<boolean>(false);

    const openPopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false);
        }, 3000);
    };

    const closeAccountWindow = () => {
        setAccountOpen(false);
    };

    const value = {
        popup,
        setPopup,
        openPopup,
        isAccountOpen,
        setAccountOpen,
        closeAccountWindow,
        loginPopup,
        setLoginPopup,
        registeredPopup,
        setRegisteredPopup,
    };

    return (
        <LayoutProvider.Provider value={value}>
            {children}
        </LayoutProvider.Provider>
    );
};
