import express from "express";
import mongoose from "mongoose";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";
import orderRouter from "./routers/orderRouter.js";

import dotenv from "dotenv";

dotenv.config();
import cors from "cors";



const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
mongoose.connect(
  process.env.MONGODB_URL ||
    "mongodb+srv://admin:admin123@cluster0.1ulgf.mongodb.net/w-h-ealth",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);

app.use(express.static("public"));

app.use("/api/users", userRouter);

app.use("/api/products", productRouter);

app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("Server is ready");
});
//middleware is an error catcher
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
