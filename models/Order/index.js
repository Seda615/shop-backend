import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  createdAt: {type: String, minLength: 3, required: true},
  subTotal: {type: String, minLength: 2, required: true},
  user: {type: String, minLength: 10, maxLength: 30, required: true},
  user_id: {type: String, minLength: 1, required: true}
});

export const Order = mongoose.model("Order", OrderSchema);
