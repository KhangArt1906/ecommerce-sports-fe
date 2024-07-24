import { lazy } from "react";

const AllProducts = lazy(() => import("../../Views/Providers/AllProducts"));
const ProductAdd = lazy(() => import("../../Views/Providers/ProductAdd"));
const ProductEdit = lazy(() => import("../../Views/Providers/ProductEdit"));
const HomePage = lazy(() => import("../../Views/Pages/HomePage"));
const ProviderDashboard = lazy(() =>
  import("../../Views/Providers/ProviderDashboard")
);
const DiscountProduct = lazy(() =>
  import("../../Views/Providers/DiscountProduct")
);
const Orders = lazy(() => import("../../Views/Providers/Orders"));
const ProviderOrdersDetail = lazy(() =>
  import("../../Views/Providers/ProviderOrdersDetail")
);
const Payments = lazy(() => import("../../Views/Providers/Payments"));
const ChatProviderAdmin = lazy(() =>
  import("../../Views/Providers/ChatProviderAdmin")
);
const ChatProviderCustomer = lazy(() =>
  import("../../Views/Providers/ChatProviderCustomer")
);
const ProviderProfile = lazy(() =>
  import("../../Views/Providers/ProviderProfile")
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
    role: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/add-product",
    element: <ProductAdd />,
    role: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/edit-product/:productID",
    element: <ProductEdit />,
    role: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/products",
    element: <AllProducts />,
    arole: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/discount-product",
    element: <DiscountProduct />,
    role: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/orders",
    element: <Orders />,
    role: "provider",
    ability: ["active", "not active"],
  },
  {
    path: "/provider/dashboard/order/details/:ordersID",
    element: <ProviderOrdersDetail />,
    role: "provider",
    ability: ["active", "not active"],
  },
  {
    path: "/provider/dashboard/payments",
    element: <Payments />,
    role: "provider",
    status: "active",
  },
  // Chat Provider and Admin,
  {
    path: "/provider/dashboard/chat-support",
    element: <ChatProviderAdmin />,
    ability: ["active", "not active", "pending"],
  },
  // Chat Provider and Customer
  {
    path: "/provider/dashboard/chat-customer/:customerID",
    element: <ChatProviderCustomer />,
    role: "provider",
    status: "active",
  },
  {
    path: "/provider/dashboard/chat-customer",
    element: <ChatProviderCustomer />,
    role: "provider",
    status: "active",
  },
  // Profile Provider
  {
    path: "/provider/dashboard/profile",
    element: <ProviderProfile />,
    role: "provider",
    status: "active",
  },
];
