import { lazy } from "react";

const Dashboard = lazy(() => import("../../Views/Admin/Dashboard"));
const Orders = lazy(() => import("../../Views/Admin/Orders"));
const CategoryProduct = lazy(() => import("../../Views/Admin/CategoryProduct"));
const Providers = lazy(() => import("../../Views/Admin/Providers"));
const Payment = lazy(() => import("../../Views/Admin/Payment"));
const ChatProvider = lazy(() => import("../../Views/Admin/ChatProvider"));
const OrdersDetail = lazy(() => import("../../Views/Admin/OrderDetails"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <Dashboard />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <CategoryProduct />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/providers",
    element: <Providers />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/payment",
    element: <Payment />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/chat-provider",
    element: <ChatProvider />,
    ability: "admin",
  },
  {
    path: "admin/dashboard/order/details/:orderId",
    element: <OrdersDetail />,
    ability: "admin",
  },
];
