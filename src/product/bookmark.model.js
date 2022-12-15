const mongoose = require("mongoose");
const bookmarkSchema = new mongoose.Schema(
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

const bookmark = mongoose.model("bookmark", bookmarkSchema);
module.exports = bookmark;
