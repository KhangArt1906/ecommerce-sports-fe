import React, { useState } from "react";
import SearchInput from "../Components/SearchInput";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Pagination from "../Pagination";

const AllProducts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <h1 className="text-[#25282a] font-semibold text-lg mb-3">
        All Products
      </h1>
      <div className="w-full p-4 bg-[#25282a] rounded-md">
        <SearchInput
          setPerPage={setPerPage}
          setSearchValue={setSearchValue}
          searchValue={searchValue}
        />

        <div className="relative overflow-x-auto mt-5">
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
                  Category
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Brand
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Price
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Discount
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Stock
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
                    Liverpool Kit
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Soccer
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    Thailand
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    $20
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    %3
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    30
                  </th>
                  <th
                    scope="row"
                    className="py-1 px-4 font-medium whitespace-nowrap"
                  >
                    <div className="flex justify-start items-center gap-4">
                      {/* Edit Btn */}
                      <Link className="p-[6px] bg-[#1f84e3] rounded hover:shadow-lg hover:shadow-slate-600">
                        <FaEdit />
                      </Link>
                      {/* Delete Btn */}
                      <Link className="p-[6px] bg-[#0f0d0d] rounded hover:shadow-lg hover:shadow-zinc-600">
                        <FaTrash />
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

export default AllProducts;
