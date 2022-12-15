const express = require("express");
const Bookmark = require("./bookmark.model");
const app = express.Router();

app.get("/", async (req, res) => {
  let { sort, order } = req.query;
  order = order === "asc" ? 1 : -1;

  try {
    if (sort && order) {
      let data = await Bookmark.find().sort({ quantity: order });
      res.send(data);
      return;
    }
    let data = await Bookmark.find();
    res.send(data);
  } catch (e) {
    console.log("error");
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let product = new Bookmark(req.body);
    await product.save();
    res.send("added");
  } catch (e) {
    res.status(404).send(e.meassage);
  }
});
app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let data = await Bookmark.findByIdAndDelete(id);
  res.send("delete succefully");
});

module.exports = app;
