import React from "react";

function Container({ children }) {
  return <div className="w-full h-full lg:px-30 xl:px-40 max-w-[1024px]:px-30 md:px-20 sm:px-10 ">{children}</div>;
}

export default Container;
