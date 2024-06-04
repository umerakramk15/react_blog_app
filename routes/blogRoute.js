import express from "express";
const router = express.Router();
import { upload } from "../middlewares/multer.js";
import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";
import {
  createBlogPostController,
  deleteleBlogPostController,
  getAllBlogPostController,
  getSingleBlogPostController,
  updateEndImage,
  updateFeaturedImage,
  updateSingleBlogPostController,
} from "../controller/blogController.js";

// create post
router.post(
  "/create-post",
  RequiresSignin,
  isAdmin,
  upload.fields([
    { name: "featuredImage", maxCount: 1 },
    { name: "endImage", maxCount: 1 },
  ]),
  createBlogPostController
);

// get all posts
router.get("/posts", getAllBlogPostController);

// get single post
router.get("/post/:slug", getSingleBlogPostController);

// update single post
router.put(
  "/update-post/:id",
  // RequiresSignin,
  // isAdmin,
  
  updateSingleBlogPostController
);

router.put(
  "/update-featured-image/:id",
  upload.fields([{ name: "featuredImage", maxCount: 1 }]),
  
  RequiresSignin,
  isAdmin,
  updateFeaturedImage
);

router.put(
  "/update-end-image/:id",
  upload.fields([{ name: "endImage", maxCount: 1 }]),
  // RequiresSignin,
  // isAdmin,
  updateEndImage
);

// delete  post
router.delete(
  "/delete-post/:id",
  RequiresSignin,
  isAdmin,
  deleteleBlogPostController
);

export default router;
