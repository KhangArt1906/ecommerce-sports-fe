import { lazy } from "react";

const HomePage = lazy(() => import("../../Views/Pages/HomePage"));
const Login = lazy(() => import("../../Views/Auth/Login"));
const Register = lazy(() => import("../../Views/Auth/Register"));
const AdminLogin = lazy(() => import("../../Views/Auth/AdminLogin"));

const publicRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
];

export default publicRoutes;
