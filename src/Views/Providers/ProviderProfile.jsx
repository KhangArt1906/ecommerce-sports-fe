import React from "react";
import { FaImages, FaPen } from "react-icons/fa";
import { FadeLoader } from "react-spinners";

const ProviderProfile = () => {
  const image = true;
  const loader = true;
  const status = "active";
  const userInformation = true;

  return (
    <div className="px-2 lg:px-7 py-5">
      <div className="w-full flex flex-col">
        <div className="w-full flex flex-col p-4 bg-[#25282a] rounded-xl text-white">
          <fieldset className="border border-[#595c5e] px-3 py-3 rounded-xl">
            <legend className="font-bold text-xl">Profile Information</legend>
            {/* Div 1: Provider and Card Information */}
            <div className="flex flex-wrap items-center justify-evenly">
              {/* Image Provider */}
              <div className="flex py-3">
                {image ? (
                  <label
                    htmlFor=""
                    className="h-[200px] w-[200px] relative rounded-full flex justify-center items-center cursor-pointer overflow-hidden"
                  >
                    <img src="/images/messi.png" alt="Profile Provider" />
                    {!loader && (
                      <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                        <span>
                          <FadeLoader />
                        </span>
                      </div>
                    )}
                  </label>
                ) : (
                  <label
                    htmlFor="img"
                    className="flex justify-center rounded-full items-center flex-col h-[200px] w-[200px] cursor-pointer border border-dashed hover:border-blue-500 border-white relative"
                  >
                    <span>
                      <FaImages />
                      <span>Upload Profile Photo</span>
                    </span>
                    {loader && (
                      <div className="bg-slate-600 absolute left-0 top-0 w-full h-full opacity-70 flex justify-center items-center z-20">
                        <span>
                          <FadeLoader />
                        </span>
                      </div>
                    )}
                  </label>
                )}
                <input type="file" className="hidden" id="img" />
              </div>
              {/* Start Card Profile */}
              <div className="flex flex-col w-[500px]">
                {/* Edit Personal Information */}
                <fieldset className="border border-[#595c5e] rounded-xl">
                  <legend className="text-xl font-bold">Personal</legend>
                  <div className="px-0 md:px-5 py-2">
                    <div className="flex justify-between text-sm flex-col gap-2 p-4 rounded-xl relative">
                      <span className=" bg-[#25282a] text-[#b6b9bd] w-[90px] h-[45px] cursor-pointer rounded hover:shadow-lg justify-center right-2 top-2 absolute flex items-center gap-2">
                        <FaPen />
                        Edit
                      </span>

                      <div className="flex gap-2">
                        <span>Name:</span>
                        <span>Khang</span>
                      </div>

                      <div className="flex gap-2">
                        <span>Email:</span>
                        <span>duykhang@gmail.com</span>
                      </div>

                      <div className="flex gap-2">
                        <span>Role:</span>
                        <span>Provider</span>
                      </div>

                      <div className="flex gap-2">
                        <span>Status:</span>
                        <span>Active</span>
                      </div>

                      <div className="flex gap-2">
                        <span>Payment:</span>
                        <p>
                          {status === "active" ? (
                            <span className="bg-green-400 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                              Pending
                            </span>
                          ) : (
                            <span className="bg-blue-400 text-white text-xs cursor-pointer font-normal ml-2 px-2 py-0.5 rounded">
                              Click to Active
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                {/* Edit Shop Information */}
                <fieldset className="border border-[#595c5e] rounded-xl">
                  <legend className="text-xl font-bold">Shop</legend>
                  <div className="px-0 md:px-5 py-2">
                    {!userInformation ? (
                      <form>
                        {/* Provider Name */}
                        <div className="flex flex-col">
                          <label htmlFor="Shop Provider Name">
                            Shop Provider Name
                          </label>
                          <input
                            type="text"
                            name="shopName"
                            id="Shop"
                            placeholder="Shop Provider Name"
                            className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                          />
                        </div>
                        {/* City */}
                        <div className="flex flex-col">
                          <label htmlFor="City">City</label>
                          <input
                            type="text"
                            name="city"
                            id="City"
                            placeholder="City"
                            className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                          />
                        </div>

                        {/* District */}
                        <div className="flex flex-col">
                          <label htmlFor="District">District</label>
                          <input
                            type="text"
                            name="district"
                            id="District"
                            placeholder="District"
                            className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                          />
                        </div>

                        {/* Address */}
                        <div className="flex flex-col">
                          <label htmlFor="Address">Address</label>
                          <input
                            type="text"
                            name="address"
                            id="Address"
                            placeholder="Address"
                            className="px-4 py-2 w-[330px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                          />
                        </div>
                        {/* Button Save */}
                        <button className="bg-[#377dff] hover:shadow-blue-500/30 hover:shadow-md text-white rounded-xl px-7 py-2 my-2">
                          Save Changes
                        </button>
                      </form>
                    ) : (
                      <div className="flex justify-between text-sm flex-col gap-2 p-4 rounded-xl relative">
                        <span className="p-[6px] bg-[#25282a] rounded hover:shadow-lg  absolute right-2 top-2 cursor-pointer">
                          <span className="flex items-center gap-2 text-[#b6b9bd] justify-center w-[80px] h-[30px]">
                            <FaPen />
                            Edit
                          </span>
                        </span>

                        <div className="flex gap-2">
                          <span>Shop Provider Name:</span>
                          <span>Hoang Vung</span>
                        </div>

                        <div className="flex gap-2">
                          <span>City:</span>
                          <span>Can Tho</span>
                        </div>

                        <div className="flex gap-2">
                          <span>District:</span>
                          <span>Ninh Kieu</span>
                        </div>

                        <div className="flex gap-2">
                          <span>Address:</span>
                          <span>179B5 Hung Phu</span>
                        </div>
                      </div>
                    )}
                  </div>
                </fieldset>
              </div>
            </div>
          </fieldset>
          {/* End Div 1*/}
          {/* Div 2: Change Password */}
          <div className="w-[50%] mt-3">
            <fieldset className="border border-[#595c5e] rounded-xl text-xl py-2 px-2">
              <legend className="text-xl font-bold">Change Password</legend>
              <div className="w-full mt-4">
                <div className="rounded-xl text-white p-4">
                  <form>
                    {/* Email */}
                    <div className="flex flex-col">
                      <label htmlFor="Email" className="text-[16px]">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Email"
                        className="px-4 py-2 w-[300px] text-sm h-[40px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                    {/* Old Email */}
                    <div className="flex flex-col mt-2">
                      <label htmlFor="old_password" className="text-[16px]">
                        Old Password
                      </label>
                      <input
                        type="password"
                        name="old_password"
                        id="old_password"
                        placeholder="Old Password"
                        className="px-4 py-2 text-sm w-[300px] h-[40px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>

                    {/* New Password */}
                    <div className="flex flex-col mt-2">
                      <label htmlFor="new_password" className="text-[16px]">
                        New Password
                      </label>
                      <input
                        type="password"
                        name="new_password"
                        id="new_password"
                        placeholder="New Password"
                        className="px-4 py-2 text-sm w-[300px] h-[40px] focus:border-[#078ee7] border border-[#2f3235] rounded-xl outline-none text-black"
                      />
                    </div>
                    {/* Button Save */}
                    <button className="bg-[#377dff] mt-4 hover:shadow-blue-500/30 hover:shadow-md text-white rounded-xl px-7 py-2 my-2">
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfile;
