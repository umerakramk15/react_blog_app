import React from "react";

const CardSkeleton = () => (
  <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-xl">
    <div className="">
      <div className="md:flex-shrink-0">
        <div className="h-[400px] w-[full] bg-gray-300 animate-pulse"></div>
      </div>
      <div className="p-8">
        <div className="h-4 bg-gray-400 w-3/4 mb-6 animate-pulse"></div>
        <div className="h-4 bg-gray-400 w-2/4 mb-6 animate-pulse"></div>
        <div className="h-4 bg-gray-400 w-1/4 mb-6 animate-pulse"></div>
        <div className="h-4 bg-gray-400 w-3/5 mb-6 animate-pulse"></div>
      
      </div>
    </div>
  </div>
);

export default CardSkeleton;
