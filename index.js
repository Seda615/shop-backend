import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import register from "./routes/register/index.js";
import login from "./routes/login/index.js";
import "dotenv/config";

const app = express();
app.use(cors())
app.use('/api/register', register);
app.use('/api/login', login);


const products = [
  {
    id :1,
    name: "iPhone 13",
    price: "1000$",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EVHlhxx9OCvfT0HhCs2bJ_2hRLJKqZRJt5AbJaLcYx2MVldw1S3QHLbhCMt8lG05JT0&usqp=CAU"
  },
  {
    id :2,
    name: "iPhone 13 pro",
    price: "1200$",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EVHlhxx9OCvfT0HhCs2bJ_2hRLJKqZRJt5AbJaLcYx2MVldw1S3QHLbhCMt8lG05JT0&usqp=CAU"
  },
  {
    id :3,
    name: "iPhone 13 pro max",
    price: "1500$",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EVHlhxx9OCvfT0HhCs2bJ_2hRLJKqZRJt5AbJaLcYx2MVldw1S3QHLbhCMt8lG05JT0&usqp=CAU"
  },
  {
    id :4,
    name: "iPhone 13 pro max",
    price: "1500$",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6EVHlhxx9OCvfT0HhCs2bJ_2hRLJKqZRJt5AbJaLcYx2MVldw1S3QHLbhCMt8lG05JT0&usqp=CAU"
  },
];


app.get("/", (req, res) => {
    res.send(products)
});


mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true},
  {useUnifiedTopology: true},
  () => {console.log("connected mongo db")}
)

app.listen(3001);
