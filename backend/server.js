import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import productRoute from "./Routes/Product.js";
import userRoute from "./Routes/Users.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());

app.use(express.json());

app.get("/api", (req, res) => {
  res.send("API is running fine....");
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.listen(
  process.env.PORT,
  console.log(`server connected to port ${process.env.PORT}!`)
);

//Connect  to DB
mongoose.connect(process.env.MONGO_DB_URL, () =>
  console.log(`Connected to DB`)
);
