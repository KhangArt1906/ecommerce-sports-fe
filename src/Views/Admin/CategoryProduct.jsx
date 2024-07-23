import React, { useState } from "react";
import { FaEdit, FaImage, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";
import { IoMdCloseCircle } from "react-icons/io";

const CategoryProduct = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [show, setShow] = useState(false);

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="flex lg:hidden justify-between items-center mb-5 p-4 bg-[#1e2022] rounded-xl">
        <h1 className="text-white font-semibold text-lg">Category</h1>
        <button
          onClick={() => setShow(true)}
          className="bg-white px-4 py-2 cursor-pointer text-black rounded-sm text-sm"
        >
          Add
        </button>
      </div>

      {/* Divide Frame Container */}
      <div className="flex flex-wrap w-full">
        {/* First Container 7/12 */}
        <div className="w-full lg:w-7/12">
          <div className="w-full p-4 bg-[#1e2022] rounded-xl">
            <div className="flex justify-between items-center">
              <select
                onChange={(e) => setPerPage(parseInt(e.target.value))}
                className="px-4 py-2 hover:border-indigo-100 outline-none bg-white 
            border border-slate-700 rounded-xl text-black
          "
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
              </select>

              <input
                className="px-4 py-2 focus:border-indigo-100 outline-none bg-white border border-slate-700 rounded-xl text-black"
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

        {/* Second Container 5/12 */}
        <div
          className={`w-[320px] lg:w-5/12 translate-x-100 lg:relative lg:right-0 fixed ${
            show ? "right-0" : "-right-[340px]"
          } z-[999] top-0 transition-all duration-500 `}
        >
          <div className="w-full pl-5">
            <div className="bg-[#1e2022] h-screen lg:h-auto px-3 py-2 lg:rounded-xl text-white">
              <div className="flex justify-between items-center mb-4 ">
                <h1 className="text-white font-semibold text-xl mb-4 w-full text-center ">
                  Add Category Product
                </h1>

                <div onClick={() => setShow(false)} className="block lg:hidden">
                  <IoMdCloseCircle />
                </div>
              </div>

              <form>
                <div className="flex flex-col w-full gap-1 mb-3">
                  <label htmlFor="name">Category Name</label>

                  <input
                    className="px-4 py-2 focus:border-indigo-100 outline-none bg-white border border-slate-700 rounded-xl text-black"
                    type="text"
                    id="name"
                    name="category_name"
                    placeholder="Enter Category..."
                  />
                </div>

                {/* Upload Image */}
                <div>
                  <label
                    htmlFor="Image"
                    className="flex justify-center items-center flex-col h-[240px] cursor-pointer border border-dashed hover:border-zinc-300 w-full border-white"
                  >
                    <span>
                      <FaImage />
                    </span>
                    <span>Upload Your File</span>
                  </label>

                  <input
                    className="hidden"
                    type="file"
                    name="image"
                    id="image"
                  />

                  <div>
                    <button className="bg-white mx-auto flex justify-center items-center hover:shadow-black hover:shadow-md text-black rounded-xl px-7 py-2 my-2">
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
