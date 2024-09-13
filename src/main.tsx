import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { routerNavigations } from "./const/router";

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
    <RouterProvider router={router} />
);
