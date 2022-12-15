const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    title: String,
    quantity: Number,
    priority: String,
    description: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Users = mongoose.model("product", productSchema);
module.exports = Users;
