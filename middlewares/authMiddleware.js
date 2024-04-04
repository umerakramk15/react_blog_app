import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// protected route user base

export const RequiresSignin = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECREAT
    );

    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

// isAdmin proteted route

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user.id);

    if (user.role === false) {
      return res.status(401).send({
        success: false,
        message: "Unauthorizae Acess",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({
      message: "unAuthorization access",
      success: false,
    });
  }
};
