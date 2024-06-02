import React, { useState, useEffect } from "react";
import axios from "axios";
import JoditEditor from "jodit-react";

function CreatePost() {
  const [categories, setCategories] = useState([]);
  const [featuredImage, setFeaturedImage] = useState("");
  const [endImage, setEndImage] = useState("");
  const [title, setTitle] = useState("");
  const [description1, setDescription1] = useState("");
  const [description2, setDescription2] = useState("");
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");

  const getAllCategories = async () => {
    const { data } = await axios.get(
      `${
        import.meta.env.VITE_REACT_APP_API_LOCAL_HOST
      }/api/v1/category/get-all-categories`
    );

    setCategories(data?.categories);
  };
  const handleCreatePost = async (e) => {
    try {
      e.preventDefault();
      const postFormData = new FormData();

      postFormData.append("title", title);
      postFormData.append("description1", description1);
      postFormData.append("description2", description2);
      postFormData.append("quote", quote);
      postFormData.append("endImage", endImage);
      postFormData.append("featuredImage", featuredImage);
      postFormData.append("category", category);

      console.log("title", title);
      console.log("description1", description1);
      console.log("description2", description2);
      console.log("quote", quote);
      console.log("endImage", endImage);
      console.log("featuredImage", featuredImage);
      console.log("category", category);
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_LOCAL_HOST
        }/api/v1/blog/create-post`,
        postFormData
      );
      window.location.reload();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategories();
    console.log(categories);
  }, []);

  return (
    <div className=" w-[100%] h-[100%] overflow-hidden">
      <div className="grid grid-cols-12 gap-4">
        {/* Add post  */}
        <div className="grid col-span-12 sm:col-span-12 w-full  gap-8">
          {/* Inputs  */}
          <h1 className="text-2xl md:text-4xl">Add New Post</h1>
          <form onSubmit={handleCreatePost} className="flex flex-col gap-3">
            <div className="w-full bg-white border rounded-lg">
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                type="text"
                placeholder="Title  "
                className="w-full py-2 px-2 sm:text-xl font-medium"
              />
            </div>
            <div>
              <h1 className="py-4 text-xl md:text-2xl">Featured Image</h1>
              <div className="w-[200px] rounded-2xl overflow-hidden">
                {featuredImage && (
                  <>
                    <div>
                      <img
                        src={URL.createObjectURL(featuredImage)}
                        alt="post_photo"
                        height={"200px"}
                      />
                    </div>
                  </>
                )}
              </div>
              <input
                type="file"
                required
                accept="image/*"
                onChange={(e) => {
                  setFeaturedImage(e.target.files[0]);
                }}
                className="p-2 bg-transparent border border-black rounded-md"
              />
            </div>
            <div className="w-full bg-white border rounded-lg">
              <input
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
                required
                type="text"
                placeholder="Quote"
                className="w-full py-2 px-2 sm:text-xl font-medium"
              />
            </div>
            <div className="w-full bg-white border rounded-lg">
              <input
                value={description1}
                onChange={(e) => setDescription1(e.target.value)}
                required
                type="text"
                placeholder="description"
                className="w-full py-2 px-2 sm:text-xl font-medium"
              />
            </div>
            <div className="w-full bg-white border rounded-lg">
              <input
                value={description2}
                onChange={(e) => setDescription2(e.target.value)}
                required
                type="text"
                placeholder="description2"
                className="w-full py-2 px-2 sm:text-xl font-medium"
              />
            </div>
            <div className="w-[90%]">
              <div className="relative inline-block w-64">
                <select
                  className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                >
                  <option>Choose Category</option>
                  {categories.map((category) => (
                    <option value={category._id}>{category.title}</option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-700">
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 12l-6-6-1 1 7 7 7-7-1-1z" />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <div className="w-[20%] rounded-2xl overflow-hidden">
                {endImage && (
                  <>
                    <div>
                      <img
                        src={URL.createObjectURL(endImage)}
                        alt="post_photo"
                        height={"200px"}
                      />
                    </div>
                  </>
                )}
              </div>
              <input
                type="file"
                required
                accept="image/*"
                onChange={(e) => {
                  setEndImage(e.target.files[0]);
                }}
                className="p-2 bg-transparent border border-black rounded-md"
              />
            </div>
            <div>
              <button type="submit"> Submit</button>
            </div>
          </form>
        </div>

        <div></div>

        {/* Publish  */}
        <div className="grid col-span-4"></div>
      </div>
    </div>
  );
}

export default CreatePost;
