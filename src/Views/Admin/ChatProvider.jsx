import React, { useState } from "react";
import { FaArrowRight, FaList } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const ChatProvider = () => {
  const [show, setShow] = useState(false);
  const providerID = 19;

  return (
    <div className="px-2 lg:px-7 py-5">
      {/* Container Background Live Chat */}
      <div className="w-full bg-[#1e2022] px-4 py-4 rounded-md h-[calc(100vh-140px)]">
        <div className="flex w-full h-full relative">
          <div
            className={`w-[280px] h-full absolute z-10 ${
              show ? "-left-[16px]" : "-left-[335px]"
            } md:left-0 md:relative transition-all`}
          >
            <div className="w-full h-[calc(100vh-175px)] bg-[#252323] md:bg-transparent overflow-y-auto">
              <div className="flex text-xl justify-between items-center p-4 md:p-0 md:px-3 md:pb-3 text-white">
                <h2>Providers</h2>
                <span
                  onClick={() => setShow(!show)}
                  className="block cursor-pointer md:hidden"
                >
                  <IoMdClose />
                </span>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-md cursor-pointer bg-[#3f7c70]`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full object-cover"
                    src="/images/ronaldo.jpg"
                    alt="Ronaldo"
                  />
                  {/* Active Icon Show */}
                  <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute right right-0 bottom-0"></div>
                </div>

                <div className="flex justify-normal-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">
                      Hoang Vung Sport
                    </h2>
                  </div>
                </div>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full object-cover"
                    src="/images/ronaldo.jpg"
                    alt="Ronaldo"
                  />
                  {/* Active Icon Show */}
                  <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute right right-0 bottom-0"></div>
                </div>

                <div className="flex justify-normal-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">Karina Sport</h2>
                  </div>
                </div>
              </div>

              <div
                className={`h-[60px] flex justify-start gap-2 items-center text-white px-2 py-2 rounded-sm cursor-pointer`}
              >
                <div className="relative">
                  <img
                    className="w-[38px] h-[38px] border-white border-2 max-w-[38px] p-[2px] rounded-full object-cover"
                    src="/images/ronaldo.jpg"
                    alt="Ronaldo"
                  />
                  {/* Active Icon Show */}
                  <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute right right-0 bottom-0"></div>
                </div>

                <div className="flex justify-normal-center items-start flex-col w-full">
                  <div className="flex justify-between items-center w-full">
                    <h2 className="text-base font-semibold">The Thao Sport</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[calc(100% - 200px)] md:pl-4">
            <div className="flex justify-between items-center ">
              {providerID && (
                <div className="flex justify-start items-center gap-3">
                  <div className="relative">
                    <img
                      className="w-[38px] h-[38px] border-green-400 border-2 max-w-[38px] p-[2px] rounded-full object-cover"
                      src="/images/messi.png"
                      alt="Ronaldo"
                    />
                    {/* Active Icon Show */}
                    <div className="w-[10px] h-[10px] bg-green-400 rounded-full absolute right right-0 bottom-0"></div>
                  </div>
                </div>
              )}

              <div
                onClick={() => setShow(!show)}
                className="w-[35px] flex md:hidden h-[35px] rounded-sm bg-black shadow-lg hover:shadow-blue-500/50 justify-center cursor-pointer items-center text-white"
              >
                <span>
                  <FaList />
                </span>
              </div>
            </div>

            <div className="py-4">
              <div className="bg-white h-[calc(100vh-280px)] rounded-md p-3 overflow-y-auto">
                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[36px] h-[36px] border-2 border-black rounded-full object-cover max-w-[38px] p-[3px]"
                        src="/images/ronaldo.jpg"
                        alt="Ronaldo"
                      />
                    </div>

                    <div className="flex justify-center items-start flex-col w-full bg-black shadow-lg  text-white py-1 px-2 rounded-full">
                      <span>Do you have Liverpool Shirt?</span>
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-end items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div className="flex justify-center items-start flex-col w-full bg-black shadow-lg  text-white py-1 px-2 rounded-full">
                      <span>
                        Yes, we still have Liverpool Shirt. But which season
                        you'd like?
                      </span>
                    </div>

                    <div>
                      <img
                        className="w-[36px] h-[36px] border-2 border-black rounded-full object-cover max-w-[38px] p-[3px]"
                        src="/images/messi.png"
                        alt="Ronaldo"
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full flex justify-start items-center">
                  <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
                    <div>
                      <img
                        className="w-[36px] h-[36px] border-2 border-black rounded-full object-cover max-w-[38px] p-[3px]"
                        src="/images/ronaldo.jpg"
                        alt="Ronaldo"
                      />
                    </div>

                    <div className="flex justify-center items-start flex-col w-full bg-black shadow-lg text-white py-1 px-2 rounded-full">
                      <span>
                        I'd like to have 2018-2019 division as if you have
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <form className="flex gap-3">
              <input
                className="w-full flex justify-between px-2 border border-slate-500 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-white"
                type="text"
                placeholder="Aa"
              />
              <button className="shadow-lg bg-transparent bg-blue-600 hover:shadow-zinc-700 text-semibold w-[65px] h-[35px] rounded-md flex justify-center items-center">
                <FaArrowRight className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatProvider;
