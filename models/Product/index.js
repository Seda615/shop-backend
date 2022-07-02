import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {type: String, minLength: 3, required: true},
  price: {type: String, minLength: 3, required: true},
  description: {type: String, minLength: 6, required: true},
  imageName: {type: String, minLength: 6, required: true}
});

export const Product = mongoose.model("Product", ProductSchema);
