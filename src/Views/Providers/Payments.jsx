import React, { forwardRef } from "react";
import { MdCurrencyExchange, MdProductionQuantityLimits } from "react-icons/md";
import { FixedSizeList as List } from "react-window";

function onWheel({ delta }) {
  console.log("handleOn", delta);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={onWheel} {...props} />
));

const Payments = () => {
  // Content of Table Payment
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$1906</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-yellow-600 text-black rounded-xl text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">18 July 2024</div>
      </div>
    );
  };

  return (
    <div className="px-2 md:px-7 py-5">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mb-5">
        {/* Grid Container */}
        <div className="flex justify-between items-center p-5 bg-[#25282a] rounded-xl gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-2xl font-bold t">$1304</h2>
            <span className="text-sm font-bold ">Total Sports Sales: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 2 */}
        <div className="flex justify-between items-center p-5 bg-[#25282a] rounded-xl gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-2xl font-bold t">$2505</h2>
            <span className="text-sm font-bold ">Available Amount </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 3 */}
        <div className="flex justify-between items-center p-5 bg-[#25282a] rounded-xl gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-2xl font-bold t">$250</h2>
            <span className="text-sm font-bold ">Withdraw Amount </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>

        {/* Grid Container 4 */}
        <div className="flex justify-between items-center p-5 bg-[#25282a] rounded-xl gap-3">
          <div className="flex flex-col justify-start items-start text-white">
            <h2 className="text-2xl font-bold t">$0</h2>
            <span className="text-sm font-bold ">Pending Amount: </span>
          </div>

          <div className="w-[40px] h-[47px] rounded-full bg-[#fff] text-black flex justify-center items-center text-xl">
            <MdCurrencyExchange className="shadow-lg" />
          </div>
        </div>
      </div>

      {/* Grid Container Request and Success */}

      {/* Send  */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 pb-4">
        <div className="bg-[#25282a] text-white rounded-xl p-5">
          <h2 className="text-lg">Send Request</h2>
          <div className="pt-5 mb-5">
            <form>
              <div className="flex gap-3 flex-wrap">
                <input
                  type="number"
                  min="0"
                  className="px-3 py-2 md:w-[45%] focus:border-blue-500 outline-none bg-[#ebedf1] 
                  border border-slate-600 rounded-xl text-black"
                  name="amount"
                />
                <button className="bg-[#377dff] hover:shadow-blue-500/30 hover:shadow-md text-white rounded-xl px-7 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Success */}
          <div>
            <h2 className="text-lg pb-4">Send Request</h2>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#1e2022] uppercase font-bold text-white text-xs min-w-[340px] rounded-xl">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>

              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>

        {/* Success */}
        <div className="bg-[#25282a] text-white rounded-xl p-5">
          <h2 className="text-lg">Success Withdraw</h2>

          <div>
            <div className="w-full overflow-x-auto">
              <div className="flex bg-[#1e2022] uppercase font-bold text-white text-xs min-w-[340px] rounded-xl">
                <div className="w-[25%] p-2">No</div>
                <div className="w-[25%] p-2">Amount</div>
                <div className="w-[25%] p-2">Status</div>
                <div className="w-[25%] p-2">Date</div>
              </div>

              {
                <List
                  style={{ minWidth: "340px" }}
                  className="List"
                  height={350}
                  itemCount={100}
                  itemSize={35}
                  outerElementType={outerElementType}
                >
                  {Row}
                </List>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;
