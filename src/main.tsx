import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { MainPage } from "./pages/MainPage";
import { MensClothingPage } from "./pages/MensClothingPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: (
                    <Suspense fallback={<h1>Loading Main Page...</h1>}>
                        <MainPage />
                    </Suspense>
                ),
            },
            {
                path: "/mens-clothing",
                element: (
                    <Suspense
                        fallback={<h1>Loading Men's Clothing Page...</h1>}
                    >
                        <MensClothingPage />
                    </Suspense>
                ),
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
