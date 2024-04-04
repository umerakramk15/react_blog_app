import blogModel from "../models/blogModel.js";
import slugify from "slugify";
// create post blogs
export const createBlogPostController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(200).send({
        success: false,
        message: "fields required",
      });
    }
    const slug = slugify(title)
    const newBlog = new blogModel({ title, description, image ,slug});

    await newBlog.save();

    return res.status(200).send({
      success: true,
      message: "Created Post Successfully",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while creating blog post",
      error,
    });
  }
};

// get all post blogs
export const getAllBlogPostController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});

    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "Blog not found",
      });
    }

    return res.status(200).send({
      success: true,
      blogCount: blogs.length,
      message: "All blog Sucessfulyy access",
      blogs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting blog post",
      error,
    });
  }
};

// get single post blogs
export const getSingleBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const blog = await blogModel.findById({ _id: id });

    if (!blog) {
      return res.status(200).send({
        message: "Not found post",
        success: false,
      });
    }

    return res.status(200).send({
      success: true,
      message: "access single Post Successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while accessing single blog post",
      error,
    });
  }
};

// update single post blogs
export const updateSingleBlogPostController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const { id } = req.params;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      { _id: id },
      { title, image, description },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "updated Post Successfully",
      updatedBlog,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while updating blog post",
      error,
    });
  }
};
// update single post blogs
export const deleteleBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;

    await blogModel.findByIdAndDelete({ _id: id });

    return res.status(200).send({
      success: true,
      message: "post deleted",
   
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while deleteing blog post",
      error,
    });
  }
};
