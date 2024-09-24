import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import cls from "./MainLayout.module.scss";
import { useTheme } from "@/providers/ThemeProvider/lib/useTheme";

const MainLayout = () => {
    const { theme } = useTheme();

    return (
        <div id="app" className={`app ${theme}`}>
            <Header />
            <main className={cls.main}>
                <Outlet />
            </main>
        </div>
    );
};

export { MainLayout };
