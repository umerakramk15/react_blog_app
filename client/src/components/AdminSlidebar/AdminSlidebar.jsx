import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaBloggerB } from "react-icons/fa";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowDownThick } from "react-icons/ti";
import { SiPowerpages } from "react-icons/si";
import { MdCategory } from "react-icons/md";
import { BiCategoryAlt } from "react-icons/bi";
import { RxUpdate } from "react-icons/rx";
import { IoMdSettings } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function AdminSlidebar() {
  const [blogActive, setBlogActive] = useState(false);
  const [menu, setMenu] = useState(true);
  return (
    <div
      className={`lg:w-[25vw] md:w-[20vw] ${
        blogActive === false
          ? "w-[20vw]"
          : "w-[100vw] lg:w-[25vw] md:w-[60vw] sm:w-[70vw]"
      } text-black font-semibold`}
    >
      <div className="w-full py-4 pl-4">
        {/* navLink ------------ */}
        <div
          onClick={() => {
            setMenu(!menu);
            setBlogActive(false);
          }}
          className="pb-10 md:"
        >
          <RxHamburgerMenu />
        </div>
        <div className={`${menu === true ? "block" : "hidden"}`}>
          <ul className="w-[100%] flex flex-col gap-y-5">
            <div className=" flex justify-start md:justify-start items-center gap-x-2">
              <span>
                <MdDashboard className="text-black/70" />
              </span>
              <li
                className={`${
                  blogActive === true ? "md:block" : "hidden md:block"
                } font-normal text-nowrap `}
              >
                Overview
              </li>
            </div>

            <div
              className=" flex justify-start md:justify-start items-center gap-x-2"
              onClick={(e) => setBlogActive(!blogActive)}
            >
              <span>
                <FaBloggerB className="text-black/70" />
              </span>
              <li
                className={`${
                  blogActive === true ? "md:block" : "hidden md:block"
                } font-normal text-nowrap `}
              >
                Blogs
              </li>
              {blogActive === false ? (
                <span>
                  <TiArrowRightThick className="text-black/70" />
                </span>
              ) : (
                <span>
                  <TiArrowDownThick className="text-black/70" />
                </span>
              )}
            </div>
            <div
              className={
                blogActive === false
                  ? "hidden"
                  : "block md:py-3 md:px-4 border mr-4"
              }
            >
              <div
                className=" flex justify-start md:justify-start items-center gap-x-2"
                onClick={() => setBlogActive(!blogActive)}
              >
                <span>
                  <SiPowerpages className="text-black/70" />
                </span>
                <li className="font-normal text-nowrap ">Posts</li>
              </div>
              <div
                className=" flex justify-start md:justify-start items-center gap-x-2"
                onClick={(e) => setBlogActive(!blogActive)}
              >
                <span>
                  <RxUpdate className="text-black/70" />
                </span>
                <li className="font-normal text-nowrap ">Update Post</li>
              </div>
              <div
                className=" flex justify-start md:justify-start items-center gap-x-2"
                onClick={(e) => setBlogActive(!blogActive)}
              >
                <span>
                  <MdCategory className="text-black/70" />
                </span>
                <li className="font-normal text-nowrap ">Categories</li>
              </div>
              <div
                className=" flex justify-start md:justify-start items-center gap-x-2 pr-5"
                onClick={(e) => setBlogActive(!blogActive)}
              >
                <span>
                  <BiCategoryAlt className="text-black/70" />
                </span>
                <li className="font-normal text-nowrap ">Update category</li>
              </div>
            </div>
            <div className=" flex justify-start md:justify-start items-center gap-x-2">
              <span>
                <IoMdSettings className="text-black/70" />
              </span>
              <li
                className={`${
                  blogActive === true ? "md:block" : "hidden md:block"
                } font-normal text-nowrap `}
              >
                Setting
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AdminSlidebar;
