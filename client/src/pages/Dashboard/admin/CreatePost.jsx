import React from "react";

function CreatePost() {
  return (
    <div className=" w-[100%] h-[100%]">
      <div className="grid grid-cols-12 gap-4">
        {/* Add post  */}
        <div className="grid col-span-8 w-full bg-slate-200">
          {/* Inputs  */}
          <h1 className="md:text-4xl">Add New Post</h1>
          <form onSubmit="">
            <div className="w-full">
              <input type="text" />
            </div>
          </form>
        </div>

        {/* Publish  */}
        <div className="grid col-span-4"></div>
      </div>
    </div>
  );
}

export default CreatePost;
