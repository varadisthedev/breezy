import mongoose from "mongoose";
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
    phone: { type: String, required: true }, // number can have +91 and leading 0
  },
  { timestamps: true },
);
const userModel = mongoose.model("userModel", userSchema);
export default userModel;
    