import User from "../models/User.js";
import bcrypt from "bcrypt"
import { signUpValidator } from "../validatitons/auth.js";
export const signUp = async (req, res) => {
  try {
    const { error } = signUpValidator.validate(req.body, { abortEarly: false });
    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({ message: errors });
    }
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.status(400).json({
        message: "Email đã tồn tại, vui lòng sử dụng email khác",
      });
    }
    const passwordEncryption = await bcrypt.hash(req.body.password, 10);
    const userAccount = await User({
      ...req.body,
      password: passwordEncryption,
    }).save();

    if (!userAccount) {
      throw new Error(`Error Sign Up`);
    }
    userAccount.password = undefined;
    return res.status(200).json({
      message: "Sign Up Success",
      data: userAccount,
    });
  } catch (error) {
    return res.json({
      name: error.name,
      message: error.message,
    });
  }
};
