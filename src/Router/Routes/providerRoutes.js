import { lazy } from "react";

const AllProducts = lazy(() => import("../../Views/Providers/AllProducts"));
const ProductAdd = lazy(() => import("../../Views/Providers/ProductAdd"));
const HomePage = lazy(() => import("../../Views/Pages/HomePage"));
const ProviderDashboard = lazy(() =>
  import("../../Views/Providers/ProviderDashboard")
);
const DiscountProduct = lazy(() =>
  import("../../Views/Providers/DiscountProduct")
);

export const providerRoutes = [
  {
    path: "/",
    element: <HomePage />,
    ability: ["admin", "provider"],
  },
  {
    path: "/provider/dashboard",
    element: <ProviderDashboard />,
    ability: ["provider"],
  },
  {
    path: "/provider/dashboard/add-product",
    element: <ProductAdd />,
    ability: ["provider"],
  },
  {
    path: "/provider/dashboard/products",
    element: <AllProducts />,
    ability: ["provider"],
  },
  {
    path: "/provider/dashboard/discount-product",
    element: <DiscountProduct />,
    ability: ["provider"],
  },
];
