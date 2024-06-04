import blogModel from "../models/blogModel.js";
import slugify from "slugify";
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

// 1) // update featured Image
export const updateFeaturedImage = async (req, res) => {
  try {
    const featuredImageLocalPath = req.files?.featuredImage[0]?.path;

    if (!featuredImageLocalPath) {
      return res
        .status(404)
        .send({ success: false, message: "File not Uploaded" });
    }

    // file upload on cloudinary
    const featuredImage = await uploadFileOnCloudinary(featuredImageLocalPath);

    if (featuredImage) {
      console.log(featuredImage.url);
    }

    const post = await blogModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        featuredImage: featuredImage.url,
      },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "featured Image updated",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Featured Image not api  hit or Not Updated",
    });
  }
};

// 2) // update end Image

export const updateEndImage = async (req, res) => {
  try {
    const endImageLocalPath = req.files?.endImage[0]?.path;

    if (!endImageLocalPath) {
      return res
        .status(404)
        .send({ success: false, message: "File not Uploaded" });
    }

    // file upload on cloudinary
    const endImage = await uploadFileOnCloudinary(endImageLocalPath);

    if (endImage) {
      console.log(endImage.url);
    }

    const post = await blogModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        endImage: endImage.url,
      },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "end Image updated",
      post,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "End Image not api  hit or Not Updated",
    });
  }
};

export const updateSingleBlogPostController = async (req, res) => {
  try {
    const { title, description1, description2, category, quote } = req.body;

    const post = await blogModel.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: title,
        description1: description1,
        description2: description2,
        quote: quote,
        slug: slugify(title),
        category,
      },
      { new: true }
    );

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
