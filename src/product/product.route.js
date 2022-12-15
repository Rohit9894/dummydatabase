const express = require("express");
const Products = require("./product.modal");
const app = express.Router();
app.get("/", async (req, res) => {
  let { sort, order } = req.query;
  order = order === "latest" ? -1 : 1;
  let priority = req.query.priority;

  try {
    if (sort && order && priority) {
      let data = await Products.find({ priority: priority }).sort({
        quantity: order,
      });
      return res.send(data);
    }
    if (sort && order) {
      let data = await Products.find().sort({ createdAt: order });
      res.send(data);
      return;
    }
    if (priority) {
      let data = await Products.find({ priority: priority });
      res.send(data);
      return;
    }
    let data = await Products.find();
    res.send(data);
  } catch (e) {
    console.log("error");
  }
});

app.post("/", async (req, res) => {
  try {
    let product = new Products(req.body);
    await product.save();
    res.send(product);
  } catch (e) {
    res.status(404).send(e.meassage);
  }
});

app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  let product = await Products.findByIdAndDelete(id);
  res.send("delete succefully");
});
module.exports = app;
