import React from "react";
import Vector from "../../../public/Vector.svg";
import Container from "../Container/Container";

function NewsLetter() {
  return (
    <div className="relative w-full h-[100%] bg-purple-500 py-40">
      <div className="absolute top-0 z-0">
        <img src={Vector} alt="" width="250px" />
      </div>
      <Container>
        <div
          className="h-full w-full lg:flex flex-col justify-center items-center
         space-y-10 z-10"
        >
          <h1 className="xl:text-7xl   lg:text-4xl  md:text-3xl sm:text-2xl text-xl text-white font-bold md:pt-3 text-center">
            Get our stories delivered From <br /> us to your inbox weekly.
          </h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-x-2 gap-y-2">
            <input
              type="email"
              name=""
              id=""
              placeholder="Your Email"
              className="px-3 py-3 rounded-xl w-[300px]  focus:outline-none"
            />
            <button className="px-4 py-2 border border-white text-xl text-white rounded-lg hover:bg-white hover:text-purple-500 transition-all">
              Get Started
            </button>
          </div>
          <p className="md:text-normal text-black font-thin lg:w-[40%] text-center text-white/50">
            Get a response tomorrow if you submit by 9pm today. If we received
            after 9pm will get a reponse the following day.
          </p>
        </div>
      </Container>
      <div className=" absolute bottom-0 right-0 z-0">
        <img src={Vector} alt="" width="250px" />
      </div>
    </div>
  );
}

export default NewsLetter;
