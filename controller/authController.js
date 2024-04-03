import userModel from "../models/userModel.js";
import {
  comparepassword,
  hashingpassword,
} from "../helpers/hashingPassword.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;

    // validation

    if (!username) {
      return res.status(400).send({
        error: "Username Required",
      });
    }
    if (!email) {
      return res.status(400).send({
        error: "email Required",
      });
    }
    if (!password) {
      return res.status(400).send({
        error: "password Required",
      });
    }
    if (!phone) {
      return res.status(400).send({
        error: "phone Required",
      });
    }

    // existing user checking

    const exsistuser = await userModel.findOne({ email });

    if (exsistuser) {
      return res.status(400).send({
        error: "Already User exsist",
      });
    }

    // hashing password
    const hashpassword = await hashingpassword(password);

    const user = await userModel.create({
      username,
      email,
      phone,
      password: hashpassword,
    });

    await user.save();

    res.status(200).send({ success: true, message: "User Register", user });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: " Something Error in Register",
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email) {
      return res.status(400).send({
        error: "email Required",
      });
    }
    if (!password) {
      return res.status(400).send({
        error: "password Required",
      });
    }

    // existing user checking

    const exsistuser = await userModel.findOne({ email });

    if (!exsistuser) {
      return res.status(400).send({
        error: "register first",
      });
    }

    // hashing password
    const matchPassword = await comparepassword(password, exsistuser.password);

    if (!matchPassword) {
      return res.send({
        success: false,
        message: "Wrong Password",
      });
    }

    // token generate

    const token = JWT.sign(
      {
        id: exsistuser._id,
      },
      process.env.JWT_SECREAT,
      { expiresIn: "7d" }
    );

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      token,
      user: {
        id: exsistuser._id,
        role : exsistuser.role,
        name: exsistuser.username,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: " Something Error in Register",
    });
  }
};
