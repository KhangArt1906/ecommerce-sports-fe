import React, { useEffect, useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import {
  messageClear,
  provider_login,
} from "../../Store/Reducers/authReducers";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(provider_login(state));
  };

  useEffect(() => {
    //Announce Success in Register
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }

    //Announce Failed in Register
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div
      className="min-w-screen min-h-screen bg-[#cdcae9] flex
    justify-center items-center"
    >
      <div className="w-[400px] text-[#fff] p-2">
        <div className="bg-[#25282a] p-4 rounded-xl">
          <h2 className="text-xl mb-3 font-bold">
            Welcome to Ecommerce Sports Clothes
          </h2>

          <p>Please register your account</p>

          <form onSubmit={submit}>
            {/* Email */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="email">Email</label>
              <input
                onChange={inputHandle}
                value={state.email}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-xl"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                onChange={inputHandle}
                value={state.password}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-xl"
                id="password"
                type="password"
                name="password"
                placeholder="Enter your Password"
                required
              />
            </div>

            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded
                 border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">I agree to privacy & agreements</label>
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/hover:shadow-lg 
            text-white rounded-xl px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader cssOverride={overrideStyle} color="#fff" />
              ) : (
                "Login"
              )}
            </button>

            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't have an account?{" "}
                <Link className="font-bold" to="/register">
                  Sign Up
                </Link>
              </p>
            </div>

            <div className="w-full flex justify-center items-center mb-3">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div
                className="w-[135px] h-[35px] flex rounded-xl bg-orange-700
                shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer
                items-center overflow-hidden"
              >
                <span>
                  <FaGoogle />
                </span>
              </div>

              <div
                className="w-[135px] h-[35px] flex rounded-xl bg-blue-700
                shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer
                items-center overflow-hidden"
              >
                <span>
                  <FaFacebook />
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
