require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const connect = require("./config/db");
const productRoute = require("./product/product.route");
const bookmarkRoute = require("./product/bookmark.route");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/product", productRoute);
app.use("/bookmark", bookmarkRoute);

app.listen(PORT, async () => {
  await connect();
  console.log(`Listening on at http://localhost:${PORT}`);
});
