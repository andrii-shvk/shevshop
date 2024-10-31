import { useSelector } from "react-redux";
import {
    checkAuthLoading,
    isAuthenticated,
} from "@/redux/auth/selectors/authSelector";
import { Login } from "@/components/ui/Login";
import { useContext, useEffect } from "react";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";
import { PageLoader } from "@/components/ui/PageLoader";

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    children,
}: PrivateRouteProps) => {
    const isAuth = useSelector(isAuthenticated);
    const { isAccountOpen, setAccountOpen, closeAccountWindow } =
        useContext(LayoutProvider);
    const isLoading = useSelector(checkAuthLoading);

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            setAccountOpen(true);
        }
    }, []);

    return (
        <>
            {isLoading && <PageLoader />}
            {isAuth ? (
                children
            ) : (
                <Login
                    isAccountOpen={isAccountOpen}
                    setAccountOpen={setAccountOpen}
                    closeAccountWindow={closeAccountWindow}
                />
            )}
        </>
    );
};

export { PrivateRoute };
