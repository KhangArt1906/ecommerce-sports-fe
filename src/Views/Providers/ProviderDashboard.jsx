import React from "react";
import { FaUsers } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

const ProviderDashboard = () => {
  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {/* Grid Container */}
        <div className="flex justify-between items-center p-5 bg-[#1e2022] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold t">$1304</h2>
            <span className="text-md font-medium ">Total Sports Sales: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 2 */}
        <div className="flex justify-between items-center p-5 bg-[#1e2022] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold t">2505</h2>
            <span className="text-md font-medium ">Products: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdProductionQuantityLimits className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 3 */}
        <div className="flex justify-between items-center p-5 bg-[#1e2022] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold t">22</h2>
            <span className="text-md font-medium ">Sellers: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <FaUsers className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 4 */}
        <div className="flex justify-between items-center p-5 bg-[#1e2022] rounded-md gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-3xl font-bold t">14</h2>
            <span className="text-md font-medium ">Orders: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <FaCartShopping className="shadow-lg" />
          </div>
        </div>
      </div>

      {/* Orders Recent */}
      <div className="w-full p-4 bg-[#1e2022] rounded-md mt-6">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg text-white pb-3">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-white">View All</Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-white uppercase border-b border-slate-700">
            <thead className="text-sm text-white uppercase border-b border-slate-500">
              <tr>
                <th scope="col" className="py-3 px-4 font-medium">
                  Order ID
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Price
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Payment Status
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Order Status
                </th>
                <th scope="col" className="py-3 px-4 font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <th
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    #1906
                  </th>
                  <th
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    $196
                  </th>
                  <th
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </th>
                  <th
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    Pending
                  </th>
                  <th
                    scope="row"
                    className="py-3 px-4 font-medium whitespace-nowrap"
                  >
                    <Link>View</Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProviderDashboard;
