import express from "express";
import {
  registerController,
  loginController,
} from "../controller/authController.js";

import { isAdmin, RequiresSignin } from "../middlewares/authMiddleware.js";
// router object

const router = express.Router();

// routung

// register route
router.post("/register", registerController);

// login route
router.post("/login", loginController);

// Protected route
router.get("/user-auth", RequiresSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

//admin Protected route
router.get("/admin-auth", RequiresSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// working ...RequiresSignin...

//test routes

// router.get("/user", RequiresSignin, (req, res) => {
//   return res.send({
//     message: "User Logged in",
//   });
// });

// router.get("/admin", RequiresSignin, isAdmin, (req, res) => {
//   res.send({
//     message: "admin Logged in",
//   });
// });

export default router;
