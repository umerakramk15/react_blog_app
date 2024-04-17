import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function AllPosts() {
  const posts = useSelector((state) => state.allPost.posts);
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl text-center pt-20 text-black font-medium text-black/60">
        ALL POSTS
      </h1>
      <div className="flex flex-wrap md:justify-between justify-center items-center w-full h-auto py-10 my-20 gap-x-20 sm:gap-0">
        <div className="w-full flex - flex-col gap-10">
          {
            // Render actual content if posts are available
            posts.map((post, i) => (
              <div className="lg:flex items-center lg:justify-between sm:flex sm:justify-center  w-full py-10 px-5 border rounded-2xl gap-5">
                <div className="lg:flex w-full gap-5 items-center">
                  <div className="w-[200px] h-[150px] ">
                    <img
                      src={post.featuredImage}
                      alt=""
                      className="rounded-xl w-full h-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-medium text-purple-500">
                      {post.category.title}
                    </h1>
                    <h1 className="text-2xl font-medium text-black">
                      {post.title}
                    </h1>
                    <h1 className="text-xl  text-black font-medium text-black/60">
                      {post.description1.substring(0, 50)}...
                    </h1>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link to={`/dashboard/admin/update-post/${post.slug}`}>
                    <button className="py-2 px-10 border rounded-lg hover:bg-purple-500 transition-all hover:text-white">
                      Update
                    </button>
                  </Link>
                  <button className="py-2 px-10 border rounded-lg hover:bg-red-500 transition-all hover:text-white">
                    Delete
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default AllPosts;
