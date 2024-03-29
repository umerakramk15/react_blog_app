import React, { useEffect, useState } from "react";
import Logo from "../../../public/Logo.png";
import Container from "../Container/Container";
import { Link } from "react-router-dom";
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Login",
    path: "/blog/post",
  },
];

function Header() {
  const [active, setActive] = useState("/");
  const [show, setShow] = useState(false);

  return (
    <Container>
      <div className="w-auto h-auto py-6 flex items-center justify-between z-10">
        <div className="flex items-center">
          <div>
            <img src={Logo} alt="" width="40px" />
          </div>
          <div className="text-2xl sm:text-4xl font-extrabold  pl-4 text-black/70">
            Blogify
          </div>
        </div>
        <div>
          <div className="md:gap-x-10 hidden sm:block">
            {navLinks.map((link) => (
              <Link
                to={link.path}
                className={`${
                  active === link.path && "text-purple-500"
                } text-[17px] font-medium text-black/70 sm:px-4 md:px-6 lg:px-8`}
                onClick={() => {
                  setActive(link.path);
                }}
              >
                {link.title}
              </Link>
            ))}
            <button className="py-2 px-6 bg-purple-500 text-white rounded-md ">
              Contact us
            </button>
          </div>
          <div className="gap-x-10 block sm:hidden">
            <div
              onClick={() => {
                setShow(!show);
              }}
            >
              Menu
              {show === true ? (
                <div className="absolute top-24 right-5 bg-purple-500/70 rounded-md z-10 border-2 shadow-2xl">
                  <div className="flex flex-col  justify-center items-center px-10 py-8 gap-y-2 ">
                    {navLinks.map((link) => (
                      <Link
                        to={link.path}
                        className={`${
                          active === link.path && "text-purple-500"
                        } text-[17px] font-normal text-white sm:px-4 md:px-6 lg:px-8`}
                        onClick={() => {
                          setActive(link.path);
                        }}
                      >
                        {link.title}
                      </Link>
                    ))}
                    <button className="py-2 px-10 bg-white text-purple-500 rounded-md ">
                      Contact us
                    </button>
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
