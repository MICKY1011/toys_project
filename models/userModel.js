const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const UserSchema = new mongoose.Schema(
  {
    email: String,
    password: String,
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);
exports.UserModel = mongoose.model("users", UserSchema);

exports.createToken = (user_id, role) => {
  const token = jwt.sign({ _id: user_id, role }, process.env.SECRET_KEY, {
    expiresIn: "600min",
  });
  return token;
};

exports.validateUsers = (reqBody) => {
  const JoiSchema = Joi.object({
    email: Joi.string().min(2).max(99).email().required(),
    password: Joi.string().min(2).max(999).required(),
  });
  return JoiSchema.validate(reqBody);
};
