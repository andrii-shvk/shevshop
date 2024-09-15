import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { routerNavigations } from "./const/router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: routerNavigations.map(({ path, element }) => ({
            path: path,
            element: (
                <Suspense fallback={<h1>Loading...</h1>}>{element}</Suspense>
            ),
        })),
    },
]);

createRoot(document.getElementById("root")!).render(
    <I18nextProvider i18n={i18n}>
        <RouterProvider router={router} />
    </I18nextProvider>
);
