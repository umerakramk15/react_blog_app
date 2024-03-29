import React from "react";
import Vector from "../../../public/Vector.svg";
import Container from "../Container/Container";
import HeroImg from "../../../public/Container.svg";
function Hero() {
  return (
    <div className="relative w-full h-[100%] bg-purple-500 py-40">
      <div className="absolute top-0 z-0">
        <img src={Vector} alt="" width="250px" />
      </div>
      <Container>
        <div
          className="h-full w-full lg:flex justify-center items-center
         space-y-10 z-10"
        >
          <div className=" space-y-10 lg:w-full h-full ">
            <h1 className="text-xl text-white font-normal">Featured Post</h1>
            <h2 className="xl:text-7xl lg:text-5xl  md:text-6xl sm:text-4xl text-4xl text-white font-bold">
              How AI will <br /> Change the Future
            </h2>
            <p className="text-xl text-white font-thin lg:w-[70%] ">
              The future of AI will see home robots having enhanced
              intelligence, increased capabilities, and becoming more personal
              and possibly cute. For example, home robots will overcome
              navigation, direction
            </p>
            <button className="bg-white py-2 px-6 rounded-md">Read More</button>
          </div>
          <div className="h-full z-10">
            <img src={HeroImg} alt="" width="700px" />
          </div>
        </div>
      </Container>
      <div className=" absolute bottom-0 right-0 z-0">
        <img src={Vector} alt="" width="250px" />
      </div>
    </div>
  );
}

export default Hero;
