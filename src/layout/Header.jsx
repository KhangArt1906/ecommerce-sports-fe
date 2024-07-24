import React from "react";
import { FaList } from "react-icons/fa";

const Header = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className="fixed top-0 left-0 w-full py-5 px-2 lg:px-7 z-40">
      {/* Background of Header */}
      <div
        className="ml-0 lg:ml-[260px] rounded-xl h-[65px] flex 
      justify-between items-center bg-[#25282a] px-5 transition-all"
      >
        {/* Icon Menu List Mobile */}
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="w-[35px] flex lg:hidden h-[35px] rounded-sm bg-[#000000] text-white shadow-lg
          hover:shadow-[#58585a] justify-center items-center cursor-pointer
          "
        >
          <span>
            <FaList />
          </span>
        </div>

        {/* Input Search Header */}
        <div className="hidden md:block">
          <input
            type="text"
            className="px-3 py-2 outline-none border bg-transparent border-slate-700 rounded-xl text-white focus:border-indigo-300 overflow-hidden"
            name="search"
            placeholder="Search"
          />
        </div>

        {/* Avatar and Name */}
        <div className="flex justify-center items-center gap-8 relative">
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center flex-col text-end">
                <h2 className="text-md font-bold text-white">Khang</h2>
                <span className="text-[14px] w-full font-normal text-white">
                  Admin
                </span>
              </div>
              <img
                className="w-[45px] h-[45px] rounded-full bg-white cursor-pointer object-cover overflow-hidden"
                src="http://localhost:3000/images/avatar.png"
                alt="Ronaldo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
