import { JeweleryPage } from "@/pages/JeweleryPage";
import { MainPage } from "@/pages/MainPage";
import { MensClothingPage } from "@/pages/MensClothingPage";
import { WomensClothingPage } from "@/pages/WomensClothingPage";
import { ReactNode } from "react";

interface RouteNav {
    path: string;
    element: ReactNode;
}

const routerNavigations: RouteNav[] = [
    {
        path: '/',
        element: <MainPage />,
    },
    {
        path: '/mens-clothing',
        element: <MensClothingPage />,
    },
    {
        path: '/womens-clothing',
        element: <WomensClothingPage />,
    },
    {
        path: '/jewelery',
        element: <JeweleryPage />,
    },
];

export { routerNavigations };