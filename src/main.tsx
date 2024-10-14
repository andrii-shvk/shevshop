import { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "@/assets/styles/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { routerNavigations } from "./const/router";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";
import { ThemeProvider } from "./providers/ThemeProvider";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { PageLoader } from "./components/ui/PageLoader";
import { LayoutContextProvider } from "./providers/LayoutContextProvider/ui/LayoutContextProvider";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: routerNavigations.map(({ path, element }) => ({
            path: path,
            element: <Suspense fallback={<PageLoader />}>{element}</Suspense>,
        })),
    },
]);

createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <LayoutContextProvider>
                <ThemeProvider>
                    <I18nextProvider i18n={i18n}>
                        <Suspense fallback={<PageLoader />}>
                            <RouterProvider router={router} />
                        </Suspense>
                    </I18nextProvider>
                </ThemeProvider>
            </LayoutContextProvider>
        </PersistGate>
    </Provider>
);
