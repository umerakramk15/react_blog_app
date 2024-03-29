import React from "react";
import Container from "../Container/Container";
import featued from "../../../public/featued.svg";


function Featured() {
  return (
    <div className=" w-full h-[100%]  py-20">
      <Container>
        <div
          className="h-full w-full lg:flex flex-col justify-center items-center
          z-10"
        >
          <div className="h-full w-full z-0 md:pb-10">
            <img src={featued} alt="" className="w-full z-9" />
          </div>
          <div className="sm:flex w-full h-full sm:justify-end sm:items-end">
            <div className="sm:w-[80%] bg-white rounded-3xl xl:-mt-80 lg:-mt-60 md:-mt-40 sm:-mt-40 shadow-xl hover:shadow-2xl transition-all z-10 px-10 py-8 sm:px-12 sm:py-8 md:px-14 md:py-14 lg:px-10 lg:py-10">
              <h1 className="text-xl text-blackfont-normal">
                Development{" "}
                <span className="text-black/70 pl-6">14 March 2024</span>
              </h1>
              <h2 className="xl:text-5xl md:pt-10 pt-3  lg:text-4xl  md:text-2xl sm:text-2xl text-xl text-black/80 font-bold">
                How to make a Game look more attractive with New VR & <br /> AI
                Technology
              </h2>
              <p className="md:text-xl text-black font-thin lg:w-[90%] md:pt-10 pt-3">
                Google has been investing in AI for many years and bringing its
                benefits to individuals, businesses and communities. Whether
                it’s publishing state-of-the-art research, building helpful
                products or developing tools and resources that enable others,
                we’re committed to making AI accessible to everyone.
              </p>
              <button className="text-purple-500 mt-10 py-2 px-6 rounded-md border-2 border-purple-500 hover:bg-purple-500 hover:text-white transition-all">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Featured;
