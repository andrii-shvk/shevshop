import { Outlet } from "react-router-dom";
import { Header } from "@/widgets/Header";

const MainLayout = () => {
    return (
        <div id="app">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export { MainLayout };
