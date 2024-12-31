import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import cls from "./MainLayout.module.scss";
import { useTheme } from "@/providers/ThemeProvider/lib/useTheme";
import { Footer } from "@/widgets/Footer";
import { useContext, useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { checkAuth } from "@/redux/auth/services/checkAuth";
import { LayoutProvider } from "@/providers/LayoutContextProvider/ui/LayoutContextProvider";
import { Login } from "@/components/ui/Login";

const MainLayout = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch<AppDispatch>();
    const { isAccountOpen, setAccountOpen, closeAccountWindow } =
        useContext(LayoutProvider);

    useEffect(() => {
        if (localStorage.getItem("token")) {
            dispatch(checkAuth());
        }
    }, []);

    return (
        <div id="app" className={`app ${theme}`}>
            <Login
                isAccountOpen={isAccountOpen}
                setAccountOpen={setAccountOpen}
                closeAccountWindow={closeAccountWindow}
            />
            <Header />
            Just test from branch to skeleton-feature
            <main className={cls.main}>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export { MainLayout };
