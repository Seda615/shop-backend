import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import register from "./routes/register/index.js";
import login from "./routes/login/index.js";
import products from "./routes/products/index.js";
import order from "./routes/orders/index.js";
import {Product} from "./models/Product/index.js"
import "dotenv/config";
import fs from "fs";

const app = express();

app.use(cors())
app.use('/api/register', register);
app.use('/api/login', login);
app.use('/api/products', products);
app.use('/api/order', order);


app.get("/:filename", async (req, res) => {
  fs.readFile('./products/images/' + req.params.filename, (err, data) => {
    res.end(data)
  })
})

mongoose.connect(
  // process.env.DB_CONNECTION,
  'mongodb://localhost:27017/shop',
  {useNewUrlParser: true},
  {useUnifiedTopology: true},
  () => {console.log("connected mongo db")}
)

app.listen(3001);
