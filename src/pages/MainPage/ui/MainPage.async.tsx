import { lazy } from "react";

const MainAsyncPage = lazy(() => import("./MainPage"));

export { MainAsyncPage };