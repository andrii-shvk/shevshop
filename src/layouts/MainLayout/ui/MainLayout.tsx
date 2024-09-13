import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";
import cls from "./MainLayout.module.scss"

const MainLayout = () => {
    return (
        <div id="app" className="app_light">
            <Header />
            <main className={cls.container}>

                <Outlet />
            </main>
        </div>
    );
};

export { MainLayout };
