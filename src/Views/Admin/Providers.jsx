import React, { useState } from "react";
import Pagination from "../Pagination";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Providers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#1e2022] rounded-md">
        <div className="flex justify-between items-center">
          <select
            onChange={(e) => setPerPage(parseInt(e.target.value))}
            className="px-4 py-2 hover:border-indigo-100 outline-none bg-white 
            border border-slate-700 rounded-md text-black
          "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>

          <input
            className="px-4 py-2 focus:border-indigo-100 outline-none bg-white border border-slate-700 rounded-md text-black"
            type="text"
            placeholder="Search"
          />
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-white uppercase border-b border-slate-700">
            <thead className="text-sm text-white uppercase border-b border-slate-500">
              <tr>
                <th scope="col" className="py-3 px-4 font-medium">
                  Number
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  IMAGE
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Name
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Shop
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Payment
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Email
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  City
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  District
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    {d}
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <img
                      className="w-[60px] h-[60px]"
                      src="/images/ao_liverpool.png"
                      alt="Liverpool Shirt"
                    />
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    T-Shirt PL
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Hoang Vung Sport
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    hoangvung@gmail.com
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Can Tho
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Ninh Kieu
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      {/* Edit Btn */}
                      <Link className="p-[6px] bg-white rounded hover:shadow-lg hover:shadow-slate-600 text-black">
                        <FaEye />
                      </Link>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="w-full flex justify-end mt-4 bottom-4 right-4">
          <Pagination
            pageNumber={currentPage}
            setPageNumber={setCurrentPage}
            totalItem={50}
            perPage={perPage}
            showItem={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Providers;
