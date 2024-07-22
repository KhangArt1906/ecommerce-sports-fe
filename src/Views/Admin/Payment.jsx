import React, { forwardRef } from "react";
import { FixedSizeList as List } from "react-window";

function onWheel({ delta }) {
  console.log("handleOn", delta);
}

const outerElementType = forwardRef((props, ref) => (
  <div ref={ref} onWheel={onWheel} {...props} />
));

const Payment = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Content of Table Payment
  const Row = ({ index, style }) => {
    return (
      <div style={style} className="flex text-sm text-white font-medium">
        <div className="w-[25%] p-2 whitespace-nowrap">{index + 1}</div>
        <div className="w-[25%] p-2 whitespace-nowrap">$1906</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <span className="py-[1px] px-[5px] bg-yellow-600 text-black rounded-md text-sm">
            Pending
          </span>
        </div>
        <div className="w-[25%] p-2 whitespace-nowrap">18 July 2024</div>
        <div className="w-[25%] p-2 whitespace-nowrap">
          <button className="bg-black shadow-lg hover:shadow-zinc-700/50 px-3 py-[2px cursor-pointer text-white rounded-sm text-sm]">
            Confirm
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="px-2 lg:px-7 pt-5">
      <div className="w-full p-4 bg-[#1e2022] rounded-md">
        <h2 className="text-xl font-medium pb-5 text-white">
          Withdraw Requests
        </h2>
        <div className="w-full overflow-x-auto">
          <div className="flex bg-[#1e2022] uppercase font-bold text-white text-xs min-w-[340px] rounded-md">
            <div className="w-[25%] p-2">No</div>
            <div className="w-[25%] p-2">Amount</div>
            <div className="w-[25%] p-2">Status</div>
            <div className="w-[25%] p-2">Date</div>
            <div className="w-[25%] p-2">Actions</div>
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
  );
};

export default Payment;
