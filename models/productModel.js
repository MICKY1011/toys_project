const mongoose = require("mongoose");
const Joi = require("joi");

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    info: String,
    category: String,
    img_url: String,
    price: Number,
    user_id: String,
  },
  { timestamps: true }
);
exports.ProductModel = mongoose.model("toys", ProductSchema);

exports.validateProducts = (reqBody) => {
  const JoiSchema = Joi.object({
    name: Joi.string().min(2).max(99).required(),
    info: Joi.string().min(2).max(999).required(),
    category: Joi.string().min(2).max(999).required(),
    img_url: Joi.string().min(2).max(999).allow(null ,""),
    price: Joi.number().min(1).max(99999).required(),
  });
  return JoiSchema.validate(reqBody);
};
