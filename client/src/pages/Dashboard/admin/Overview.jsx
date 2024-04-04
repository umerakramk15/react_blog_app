import React from "react";

import AdminDashboardLayout from "../../../components/AdminSlidebar/AdminDashboardLayout";
import { GrAnnounce } from "react-icons/gr";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

import { FaDollarSign } from "react-icons/fa6";

function Overview() {
  return (
    <AdminDashboardLayout>
      <div className="flex flex-col justify-start w-full h-full gap-y-10">
        <div>
          <h1 className="text-3xl text-black/80 font-bold">Overview</h1>
          <p className="text-sm font-normal text-black/60">
            Welcome to your Dashboard
          </p>
        </div>

        {/* Grapgh Part */}

        <div className="w-full flex gap-5 justify-between items-center flex-wrap">
          <div className="bg-white xl:w-[30%]">
            <div className="flex flex-row justify-center items-center w-full h-auto p-4">
              <div className="flex flex-col w-full gap-y-5 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-purple-500 xl:text-5xl lg:text-4xl text-3xl  font-bold">
                    1{" "}
                    <span className="text-black/50 text-sm font-normal">
                      / 1 Total
                    </span>{" "}
                  </h1>
                  <GrAnnounce className="text-4xl text-purple-500" />
                </div>

                <h3 className="text-black/80 text-2xl font-bold">
                  Blog Created{" "}
                  <span className="text-black/50 text-sm font-normal">
                    {" "}
                    (This Month / Lifetime)
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-2 text-white bg-purple-500">
              <h1 className="font-normal text-sm">CREATE A BLOG</h1>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </div>
          <div className="bg-white xl:w-[30%]">
            <div className="flex flex-row justify-center items-center w-full h-auto p-4">
              <div className="flex flex-col w-full gap-y-5 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-red-500 xl:text-5xl lg:text-4xl text-3xl  font-bold">
                    1{" "}
                    <span className="text-black/50 text-sm font-normal">
                      / 1 Total
                    </span>{" "}
                  </h1>
                  <FaHeart className="text-4xl text-red-500" />
                </div>

                <h3 className="text-black/80 text-2xl font-bold">
                  Likes{" "}
                  <span className="text-black/50 text-sm font-normal">
                    {" "}
                    (This Month / Lifetime)
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-2 text-white bg-red-500">
              <h1 className="font-normal text-sm">See Likes</h1>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </div>
          <div className="bg-white xl:w-[30%]">
            <div className="flex flex-row justify-center items-center w-full h-auto p-4">
              <div className="flex flex-col w-full gap-y-5 ">
                <div className="flex justify-between items-center">
                  <h1 className="text-green-500 xl:text-5xl lg:text-4xl text-3xl  font-bold">
                    $0.00{" "}
                    <span className="text-black/50 text-sm font-normal">
                      / 1 Total
                    </span>{" "}
                  </h1>
                  <FaDollarSign className="text-4xl text-green-500" />
                </div>

                <h3 className="text-black/80 text-2xl font-bold">
                  Your Earning{" "}
                  <span className="text-black/50 text-sm font-normal">
                    {" "}
                    (This Month / Lifetime)
                  </span>{" "}
                </h3>
              </div>
            </div>
            <div className="flex justify-between items-center px-4 py-2 text-white bg-green-500">
              <h1 className="font-normal text-sm">CREATE A BLOG</h1>
              <RiArrowRightSLine className="text-xl" />
            </div>
          </div>
        </div>
      </div>
    </AdminDashboardLayout>
  );
}

export default Overview;
