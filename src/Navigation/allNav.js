import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";
import { IoIosChatbubbles } from "react-icons/io";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <AiOutlineShoppingCart />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <BiCategory />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Providers",
    icon: <FaUsers />,
    role: "admin",
    path: "/admin/dashboard/providers",
  },
  {
    id: 5,
    title: "Payment",
    icon: <MdPayment />,
    role: "admin",
    path: "/admin/dashboard/payment",
  },
  {
    id: 6,
    title: "Live Chat",
    icon: <IoIosChatbubbles />,
    role: "admin",
    path: "/admin/dashboard/chat-provider",
  },
  // Provider
  {
    id: 9,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Product",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/products",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat Customer",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat Support",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/chat-support",
  },
  // Profile Provider Page
  {
    id: 17,
    title: "Provider Profile",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard/profile",
  },
];
