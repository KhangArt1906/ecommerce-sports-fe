import React from "react";

const OrdersDetail = () => {
  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#1e2022] rounded-md">
        <div className="flex justify-between items-center p-4">
          <h2 className="text-xl text-white">Order Details</h2>

          <select
            name=""
            id=""
            className="px-4 py-2 focus:border-blue-400 outline-none bg-black border border-slate-700 rounded-md text-white"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Warehouse">Warehouse</option>
            <option value="Placed">Placed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        <div className="p-4">
          <div className="flex gap-2 text-lg text-white">
            <h2>#1906</h2>
            <span>19 July 2024</span>
          </div>

          <div className="flex flex-wrap">
            <div className="w-[30%]">
              <div className="pr-3 text-white text-lg">
                <div className="flex flex-col gap-1">
                  <h2 className="pb-2 font-semibold">
                    Deliver to: Khang Nguyen
                  </h2>

                  <p>
                    <span className="text-sm">179 B5 Hung Phu</span>
                  </p>
                </div>

                <div className="flex justify-start items-center gap-3">
                  <h2>Payment Status: </h2>
                  <span className="text-base">Paid</span>
                </div>

                <span>Price: $225</span>

                <div className="mt-4 flex flex-col gap-4 bg-black rounded-md">
                  <div className="text-white">
                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[50px] h-[50px]"
                        src="/images/air_force_1.png"
                      />

                      <div>
                        <h2>Product Name Here: </h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity: 3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-[70%] ">
              <div className="pl-3">
                <div className="mt-4 flex flex-col bg-black rounded-md p-4">
                  <div className="text-white">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order: </h2>
                      <span>Pending</span>
                    </div>

                    <div className="flex gap-3 text-md">
                      <img
                        className="w-[50px] h-[50px]"
                        src="/images/air_force_1.png"
                      />

                      <div>
                        <h2>Product Name Here: </h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity: 3</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-white mt-2">
                    <div className="flex justify-start items-center gap-3">
                      <h2>Seller 1 Order: </h2>
                      <span>Pending</span>
                    </div>

                    <div className="flex gap-3 text-md mt-2">
                      <img
                        className="w-[50px] h-[50px]"
                        src="/images/air_force_1.png"
                      />

                      <div>
                        <h2>Product Name Here: </h2>
                        <p>
                          <span>Brand :</span>
                          <span>Easy</span>
                          <span className="text-lg">Quantity: 3</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersDetail;
