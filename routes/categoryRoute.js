import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoryController,
  getSingleCategoryController,
  updateCategoryController,
} from "../controller/categoryController.js";
import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// create category controller
router.post(
  "/create-category",
  RequiresSignin,
  isAdmin,
  createCategoryController
);

// get all category controller
router.get("/get-all-categories", getAllCategoryController);

// get single category controller
router.get("/get-category/:slug", getSingleCategoryController);

// update category controller
router.put(
  "/update-category/:slug",
  RequiresSignin,
  isAdmin,
  updateCategoryController
);

// delete category controller
router.delete(
  "/delete-category/:slug",
  RequiresSignin,
  isAdmin,
  deleteCategoryController
);

export default router;
