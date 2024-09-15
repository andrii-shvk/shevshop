import { JeweleryPage } from "@/pages/JeweleryPage";
import { MainPage } from "@/pages/MainPage";
import { MensClothingPage } from "@/pages/MensClothingPage";
import { WomensClothingPage } from "@/pages/WomensClothingPage";
import { ReactNode } from "react";

interface RouteNav {
    title?: string;
    path: string;
    element: ReactNode;
}

const routerNavigations: RouteNav[] = [
    {
        title: "Home",
        path: '/',
        element: <MainPage />,
    },
    {
        title: "Men's Clothing",
        path: '/mens-clothing',
        element: <MensClothingPage />,
    },
    {
        title: "Womens's Clothing",
        path: '/womens-clothing',
        element: <WomensClothingPage />,
    },
    {
        title: "Jewelery",
        path: '/jewelery',
        element: <JeweleryPage />,
    },
];

export { routerNavigations };