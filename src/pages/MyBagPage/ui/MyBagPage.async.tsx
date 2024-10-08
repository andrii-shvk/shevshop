import { lazy } from "react";

const MyBagPageAsync = lazy(() => import("./MyBagPage"));

export { MyBagPageAsync };