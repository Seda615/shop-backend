import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstname: {type: String, minLength: 3, maxLength: 10, required: true},
  lastname: {type: String, minLength: 7, maxLength: 20, required: true},
    email: {
    type: String,
    minLength: 10,
    maxLength: 30,
    required: true,
    unique: true
  },
  password: {type: String, minLength: 6, maxLength: 200, required: true},
  confirmPassword: {type: String, minLength: 6, maxLength: 12,}
});

export const User = mongoose.model("User", userSchema);
