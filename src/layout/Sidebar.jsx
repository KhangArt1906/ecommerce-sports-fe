import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../Navigation/index";
import { BiLogOutCircle } from "react-icons/bi";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    // const navs = getNav("admin");
    const navs = getNav("provider");
    setAllNav(navs);
  }, []);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#ebedf1] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-[#1e2022] z-50 top-0 h-screen 
        shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }
        `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img
              className="w-[200px] h-[160px]"
              src="http://localhost:3000/images/logo_sport.png"
              alt=""
            />
          </Link>
        </div>

        {/* Navbar of Sidebar Loop allNav */}
        <div className="px-[16px] pt-24">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-[rgb(42,133,212)] shadow-indigo-500/50 text-white font-bold duration-500"
                      : "text-[#fff] font-bold duration-200"
                  } 
                      px-[12px] py-[12px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1`}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}

            <li>
              <button className="text-[#fff] font-bold duration-200 px-[12px] py-[12px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 ">
                <span>
                  <BiLogOutCircle />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;