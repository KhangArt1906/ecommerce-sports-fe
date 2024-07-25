import { AiOutlineDashboard, AiOutlineShoppingCart } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { MdPayment, MdViewList } from "react-icons/md";
import { IoIosChatbubbles, IoMdAdd } from "react-icons/io";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck, BsFillChatQuoteFill } from "react-icons/bs";
import { IoChatbox } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

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
    id: 7,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "provider",
    path: "/provider/dashboard",
  },
  {
    id: 8,
    title: "Add Product",
    icon: <IoMdAdd />,
    role: "provider",
    path: "/provider/dashboard/add-product",
  },
  {
    id: 9,
    title: "All Product",
    icon: <MdViewList />,
    role: "provider",
    path: "/provider/dashboard/products",
  },
  {
    id: 10,
    title: "Discount Product",
    icon: <TbBasketDiscount />,
    role: "provider",
    path: "/provider/dashboard/discount-product",
  },
  {
    id: 11,
    title: "Orders",
    icon: <BsCartCheck />,
    role: "provider",
    path: "/provider/dashboard/orders",
  },
  {
    id: 12,
    title: "Payments",
    icon: <MdPayment />,
    role: "provider",
    path: "/provider/dashboard/payments",
  },
  {
    id: 13,
    title: "Chat Customer",
    icon: <BsFillChatQuoteFill />,
    role: "provider",
    path: "/provider/dashboard/chat-customer",
  },
  {
    id: 14,
    title: "Chat Support",
    icon: <IoChatbox />,
    role: "provider",
    path: "/provider/dashboard/chat-support",
  },
  // Profile Provider Page
  {
    id: 15,
    title: "Provider Profile",
    icon: <CgProfile />,
    role: "provider",
    path: "/provider/dashboard/profile",
  },
];
