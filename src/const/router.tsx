import { JeweleryPage } from "@/pages/JeweleryPage";
import { MainPage } from "@/pages/MainPage";
import { MensClothingPage } from "@/pages/MensClothingPage";
import { MyBagPage } from "@/pages/MyBagPage";
import { WishListPage } from "@/pages/WishListPage";
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
        path: "/",
        element: <MainPage />,
    },
    {
        title: "Men's Clothing",
        path: "/mens-clothing",
        element: <MensClothingPage />,
    },
    {
        title: "Womens's Clothing",
        path: "/womens-clothing",
        element: <WomensClothingPage />,
    },
    {
        title: "Jewelery",
        path: "/jewelery",
        element: <JeweleryPage />,
    },
    {
        title: "WishList",
        path: "/wishlist",
        element: <WishListPage />,
    },
    {
        title: "My-Bag",
        path: "/my-bag",
        element: <MyBagPage />,
    },
];

export { routerNavigations };

interface IFooterSiteLinks {
    linkHeader: string;
    links: {
        title: string;
        link: string;
    }[];
}

export const footerSiteLinks: IFooterSiteLinks[] = [
    {
        linkHeader: "Help",
        links: [
            {
                title: "Help Center",
                link: "/",
            },
            {
                title: "Delivery",
                link: "/",
            },
            {
                title: "Return",
                link: "/",
            },
            {
                title: "Track an order",
                link: "/",
            },
        ],
    },
    {
        linkHeader: "Company",
        links: [
            {
                title: "About us",
                link: "/",
            },
            {
                title: "Press",
                link: "/",
            },
            {
                title: "Articles",
                link: "/",
            },
            {
                title: "Become a seller",
                link: "/",
            },
            {
                title: "Student discount",
                link: "/",
            },
        ],
    },
    {
        linkHeader: "Legal",
        links: [
            {
                title: "Terms of service",
                link: "/",
            },
            {
                title: "Privacy policy",
                link: "/",
            },
            {
                title: "Cookie notice",
                link: "/",
            },
            {
                title: "Cookie settings",
                link: "/",
            },
        ],
    },
];