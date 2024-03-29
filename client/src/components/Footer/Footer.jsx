import React from "react";
import Container from "../Container/Container";
import Logo from "../../../public/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
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
      path: "/login",
    },
    {
      title: "Contact Us",
      path: "/contact-us",
    },
  ];

  return (
    <div className=" w-full h-[100%]  py-10">
      <Container>
        <div className="flex items-center justify-center">
          <div>
            <img src={Logo} alt="" width="40px" />
          </div>
          <div className="text-2xl sm:text-4xl font-extrabold  pl-4 text-black/70">
            Blogify
          </div>
        </div>
        <div className=" flex pt-10 justify-center items-center">
          {navLinks.map((link) => (
            <Link
              to={link.path}
              className={` text-[17px] font-normal text-black/60 sm:px-4 md:px-6 lg:px-8`}
            >
              {link.title}
            </Link>
          ))}
        </div>
        <div className="flex justify-center items-center py-10 gap-x-3">
          <h1 className="bg-purple-500 text-white font-medium rounded-full inline-block px-2 py-1">
            IG
          </h1>
          <h1 className="bg-purple-500 text-white font-medium rounded-full inline-block px-3 py-1">
            X
          </h1>
          <h1 className="bg-purple-500 text-white font-medium rounded-full inline-block px-2 py-1">
            FB
          </h1>
          <h1 className="bg-purple-500 text-white font-medium rounded-full inline-block px-2 py-1">
            IN
          </h1>
        </div>
        <hr className="mt-10 bottom-1 border-purple-400" />
        <p className="md:text-normal text-black font-thin pt-10 text-center ">
          Copyright Muhammad Umer Designer © 2024. All Right Reserved
        </p>
      </Container>
    </div>
  );
}

export default Footer;
