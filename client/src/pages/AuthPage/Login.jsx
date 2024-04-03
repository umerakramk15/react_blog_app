import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import { FaLock } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa6";

import Eyegif from "../../../public/eye.gif";
import { FaFacebookF } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import { FaGoogle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      console.log(data?.success);
      if (data) {
        setAuth({ ...auth, user: data.user, token: data.token });
        localStorage.setItem("auth", JSON.stringify(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <Container>
        <div className="flex flex-col w-full justify-center items-center py-28">
          <div className=" border xl:w-[50%] lg:w-[70%] md:w-[90%] rounded-xl w-full">
            <form
              onSubmit={handleLogin}
              className="flex flex-col  items-center h-auto pt-10 gap-y-5 px-2"
            >
              <h1 className="font-bold text-3xl pb-10">Login</h1>
              <div className="form-group flex justify-start items-center p-3 border  sm:w-[60%] w-full">
                <span>
                  <FaEnvelope className="sm:text-xl text-purple-500" />
                </span>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className=" py-1 px-3 focus:outline-none"
                  id="exampleInputPassword1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group flex justify-between items-center p-3 border  sm:w-[60%] w-full">
                <div className="flex justify-center items-center">
                  <span>
                    <FaLock className=" sm:text-xl text-purple-500" />
                  </span>
                  <input
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword === false ? "password" : "text"}
                    className=" py-1 px-3 focus:outline-none"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="">
                  {password.length > 0 ? (
                    <>
                      {showPassword === false ? (
                        <>
                          <FaEyeSlash
                            className="text-2xl opacity-60 pr-2"
                            onClick={(e) => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        </>
                      ) : (
                        <>
                          <img
                            src={Eyegif}
                            alt=""
                            className="sm:w-9 rounded-full w-8"
                            onClick={() => {
                              setShowPassword(!showPassword);
                            }}
                          />
                        </>
                      )}
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center s sm:w-[60%] w-[90%] ">
                <div className="flex justify-start space-x-2 items-center opacity-70">
                  <input type="checkbox" />
                  <p className="sm:font-semibold text-[14px]">Remember me</p>
                </div>
                <div>
                  <p className="sm:font-semibold text-[14px] cursor-pointer text-purple-600">
                    Forget password?
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="px-14 py-3 bg-purple-500 rounded-md text-white font-medium mt-4  mb-10"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="mb-6 ">
              <div className="flex w-full justify-center items-center text-black/70 font-semibold">
                <h1>
                  Don't have an account?{" "}
                  <span className="text-purple-500 font-medium">
                    <NavLink to={"/register"}>Sign up</NavLink>
                  </span>
                </h1>
              </div>
              <div className="flex justify-center items-center w-full h-auto">
                <hr className="sm:w-[30%]  w-[20%]" />
                <h1 className=" bg-white px-3 py-3 flex justify-center items-center text-xl font-semibold">
                  or connect with
                </h1>
                <hr className="sm:w-[30%] w-[20%]" />
              </div>
              <div className="flex justify-center items-center py-4 space-x-5 w-full h-auto transition-all ease-linear">
                <div className="border rounded-full p-2 border-purple-300 hover:bg-purple-500 transition-all ease-linear">
                  <FaFacebookF className="text-2xl text-purple-500 hover:text-white w-auto" />
                </div>
                <div className="border rounded-full p-2 border-purple-300 hover:bg-purple-500 transition-all ease-linear">
                  <RiGithubLine className="text-2xl text-purple-500 hover:text-white w-auto" />
                </div>
                <div className="border rounded-full p-2 border-purple-300 hover:bg-purple-500 transition-all ease-linear">
                  <FaGoogle className="text-2xl text-purple-500 hover:text-white w-auto" />
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default Login;
