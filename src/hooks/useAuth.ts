import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useContext } from "react";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";
import { login } from "@/redux/auth/services/login";
import { logout } from "@/redux/auth/services/logout";
import { registration } from "@/redux/auth/services/registration";

export interface LoginFormInputs {
    email: string;
    password: string;
}

export const useAuth = () => {
    const {
        setAccountOpen,
        closeAccountWindow,
        setLoginPopup,
        setRegisteredPopup,
    } = useContext(LayoutProvider);

    const dispatch = useDispatch<AppDispatch>();

    const SignIn = async (data: LoginFormInputs): Promise<void> => {
        const response = await dispatch(login(data));
        if (login.fulfilled.match(response)) {
            setLoginPopup(true);
            setTimeout(() => {
                setLoginPopup(false);
            }, 2000);
            setAccountOpen(false);
        }
    };

    const SignUp = async (data: LoginFormInputs): Promise<void> => {
        const response = await dispatch(registration(data));

        if (registration.fulfilled.match(response)) {
            setRegisteredPopup(true);
            setTimeout(() => {
                setRegisteredPopup(false);
            }, 2000);
            setAccountOpen(false);
            closeAccountWindow();
        }
    };

    const LogOut = async (): Promise<void> => {
        await dispatch(logout());
    };

    return {
        SignIn,
        SignUp,
        LogOut,
    };
};
