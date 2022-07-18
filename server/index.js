import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import postRoutes from "./Routes/postRoutes.js";
dotenv.config();

const app = express();
//Routes
app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//MONGODB url
const dbUrl = process.env.CONNECTION_URL;
//port number
const port = process.env.PORT;

mongoose
  .connect(dbUrl)
  .then(() =>
    app.listen(port, () => console.log(`Server is running at port : ${port}`))
  )
  .catch((error) => console.log(error.message));
