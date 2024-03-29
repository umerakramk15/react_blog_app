import userModel from "../models/userModel.js";
import { hashingpassword } from "../helpers/hashingPassword.js";
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
