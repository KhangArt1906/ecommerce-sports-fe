import React, { useState } from "react";
import { LuArrowDownSquare } from "react-icons/lu";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

const Orders = () => {
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

        <div className="relative mt-5 overflow-x-auto">
          <div className="w-full text-sm text-left [#]">
            <div className="text-sm text-white uppercase border-b border-slate-500">
              <div className="flex justify-between items-center">
                <div className="py-3 w-[25%] font-bold">Order ID</div>
                <div className="py-3 w-[13%] font-bold">Price</div>
                <div className="py-3 w-[18%] font-bold">Payment</div>
                <div className="py-3 w-[18%] font-bold">Status</div>
                <div className="py-3 w-[18%] font-bold">Action</div>
                <div className="py-3 w-[8%] font-bold">
                  <LuArrowDownSquare />
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-500">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #1906
                </div>
                <div className="py-3 w-[13%] font-medium">$196</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link to="/admin/dashboard/order/details/3">View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-500 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-500">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #1906
                </div>
                <div className="py-3 w-[13%] font-medium">$196</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-500 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-500">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #1906
                </div>
                <div className="py-3 w-[13%] font-medium">$196</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-500 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>

            <div className="text-white">
              <div className="flex justify-between items-start border-b border-slate-500">
                <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                  #1906
                </div>
                <div className="py-3 w-[13%] font-medium">$196</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">Pending</div>
                <div className="py-3 w-[18%] font-medium">
                  <Link>View</Link>
                </div>
                <div
                  onClick={(e) => setShow(!show)}
                  className="py-3 w-[8%] font-bold"
                >
                  <LuArrowDownSquare />
                </div>
              </div>

              <div
                className={
                  show
                    ? "block border-b border-slate-500 bg-slate-800"
                    : "hidden"
                }
              >
                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>

                <div className="flex justify-start items-start border-b border-slate-500 bg-[#181a25]">
                  <div className="py-3 w-[25%] font-medium whitespace-nowrap">
                    #1906
                  </div>
                  <div className="py-3 w-[13%] font-medium">$52</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                  <div className="py-3 w-[18%] font-medium">Pending</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pagination of Orders */}
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

export default Orders;
