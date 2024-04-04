import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

export const createCategoryController = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(200).send({
        success: false,
        message: "tiitle is required",
      });
    }

    const slug = slugify(title);
    const category = new categoryModel({ title, slug });

    await category.save();

    return res.status(200).send({
      success: true,
      message: "Category created",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Something error while creating category",
    });
  }
};
export const getAllCategoryController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});

    if (!categories) {
      return res.status(200).send({
        success: false,
        message: "Cateogries Empty",
      });
    }

    return res.status(200).send({
      success: true,
      categoryCount: categories.length,
      message: "All Category acesss",
      categories,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Something error while getting all category",
    });
  }
};

export const getSingleCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const category = await categoryModel.find({ slug });

    if (category.length === 0) {
      return res.status(200).send({
        success: false,
        message: "No category found ",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Category exsist",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Something error while getting category",
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;
    const { title } = req.body;

    if (!title) {
      return res.status(200).send({
        success: false,
        message: "title required ",
      });
    }

    const category = await categoryModel.findOneAndUpdate(
      { slug },
      { title, slug: slugify(title) },
      { new: true }
    );

    return res.status(200).send({
      success: true,
      message: "Category exsist",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Something error while getting category",
    });
  }
};

export const deleteCategoryController = async (req, res) => {
  try {
    const { slug } = req.params;

    await categoryModel.findOneAndDelete({ slug });

    return res.status(200).send({
      success: true,
      message: "Category Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Something error while Deleting category",
    });
  }
};
