import React from "react";
import { Link } from "react-router-dom";

function Card({ category, date, title, description, img }) {
  return (
    <div className="xl:w-[30%] lg:w-[30%] md:w-[47%] sm:w-[50%] w-[80%] m-3">
      <div>
        <img src={img} alt="" className="w-full" />
      </div>
      <div>
        <h1 className="text-normal text-blackfont-normal pt-6">
          {category} <span className="text-black/70 pl-6">{date}</span>
        </h1>
        <h2 className="xl:text-3xl pt-3 lg:text-2xl  md:text-2xl sm:text-xl text-xl text-black/80 font-bold">
          {title}
        </h2>
        <p className="md:text-normal text-black font-thin lg:w-[90%] pt-3">
          {description}
        </p>
        <button className="text-purple-500 mt-10  rounded-md transition-all hover:text-purple-600 hover:text-xl">
          <Link to={"/blog/post"}>Read More...</Link>
        </button>
      </div>
    </div>
  );
}

export default Card;
