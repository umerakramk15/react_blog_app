import blogModel from "../models/blogModel.js";
import slugify from "slugify";
import fs from "fs";
import { uploadFileOnCloudinary } from "../helpers/cloudinary.js";
// create post blogs
export const createBlogPostController = async (req, res) => {
  try {
    const { title, description1, description2, category, quote } = req.body;

    if (!title || !description1 || !quote || !category) {
      return res.status(200).send({
        success: false,
        message: "fields required",
      });
    }
    const slug = slugify(title);

    const featuredImageLocalPath = req.files?.featuredImage[0]?.path;
    const endImageLocalPath = req.files?.endImage[0]?.path;

    if (!featuredImageLocalPath) {
      return res.status(200).send({
        success: false,
        message: "Featured Image Required",
      });
    }

    // upload on cludinary

    const featuredImage = await uploadFileOnCloudinary(featuredImageLocalPath);
    const endImage = await uploadFileOnCloudinary(endImageLocalPath);

    if (featuredImage) {
      console.log(featuredImage.url);
    }

    const post = await blogModel.create({
      ...req.body,
      featuredImage: featuredImage.url,
      endImage: endImage.url,
      slug,
    });

    return res.status(200).send({
      success: true,
      message: "Created Post Successfully",
      post,
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

    const blog = await blogModel.findOne({ slug }).populate("category");

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
export const updatePostImage = async (req, res) => {
  try {
    // const featuredImageLocalPath = req.files?.featuredImage[0]?.path;
    // // const endImageLocalPath = req.files?.endImage[0]?.path;
    res.send("Api Hit");
    // console.log(featuredImageLocalPath);
    // if (featuredImageLocalPath) {
    //   return true;
    // } else return false;
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Featured Image Not Updated",
    });
  }
};

export const updateSingleBlogPostController = async (req, res) => {
  try {
    const { title, description1, description2, category, quote } = req.body;

    const slug = slugify(title);

    const featuredImageLocalPath = req.files?.featuredImage[0]?.path;
    const endImageLocalPath = req.files?.endImage[0]?.path;

    if (featuredImageLocalPath) {
      const featuredImage = await uploadFileOnCloudinary(
        featuredImageLocalPath
      );
    }
    if (endImageLocalPath) {
      const endImage = await uploadFileOnCloudinary(endImageLocalPath);
    }

    // upload on cludinary

    const post = await blogModel.find(req.params.slug, {
      ...req.body,
      featuredImage: featuredImage.url,
      endImage: endImage.url,
      slug,
    });

    return res.status(200).send({
      success: true,
      message: "Created Post Successfully",
      post,
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
// delete single post blogs
export const deleteleBlogPostController = async (req, res) => {
  try {
    const { id } = req.params;

    const data = await blogModel.findByIdAndDelete({ _id: id });
    console.log(data);

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
