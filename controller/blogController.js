import blogModel from "../models/blogModel.js";
import slugify from "slugify";
import fs from "fs";
// create post blogs
export const createBlogPostController = async (req, res) => {
  try {
    const { title, description1, description2, category, quote } = req.fields;
    const { featuredImage, endImage } = req.files;
    if (!title || !description1 || !quote || !category) {
      return res.status(200).send({
        success: false,
        message: "fields required",
      });
    }
    const slug = slugify(title);
    const newBlog = new blogModel({ ...req.fields, slug });

    if (featuredImage) {
      newBlog.featuredImage.data = fs.readFileSync(featuredImage.path);
      newBlog.featuredImage.contentType = featuredImage.type;
    }
    if (endImage) {
      newBlog.endImage.data = fs.readFileSync(endImage.path);
      newBlog.endImage.contentType = endImage.type;
    }

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
    const blogs = await blogModel.find({}).populate("category").sort("-1");

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
    const { slug } = req.params;
    
    const blog = await blogModel.findOne({slug}).populate("category");

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
    const { title, description1, description2, category, quote } = req.fields;
    const { featuredImage, endImage } = req.files;
    const { id } = req.params;

    const updatedBlog = await blogModel.findByIdAndUpdate(
      { _id: id },
      { title, description1, description2, category, quote },
      { new: true }
    );
    if (featuredImage) {
      updatedBlog.featuredImage.data = fs.readFileSync(featuredImage.path);
      updatedBlog.featuredImage.contentType = featuredImage.type;
    }
    if (endImage) {
      updatedBlog.endImage.data = fs.readFileSync(endImage.path);
      updatedBlog.endImage.contentType = endImage.type;
    }

    await updatedBlog.save();

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

export const getPostPhotoController = async (req, res) => {
  try {
    const { id } = req.params;
    const postImage = await blogModel
      .findById(id)
      .select("featuredImage endImage");

    const responseData = {};

    if (postImage.featuredImage && postImage.featuredImage.data) {
      res.set("content-type", postImage.featuredImage.contentType);
      responseData.featuredImage = postImage.featuredImage.data;
    }
    if (postImage.endImage && postImage.endImage.data) {
      res.set("content-type", postImage.endImage.contentType);
      responseData.endImage = postImage.endImage.data;
    }

    return res.status(200).send(responseData);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Error in Access single photo",
      success: false,
      error,
    });
  }
};
