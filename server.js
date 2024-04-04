// imports
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js";
import blogRoute from "./routes/blogRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import cors from "cors";
// config env
dotenv.config();

// rest opbjects
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// data base call
connectDB();

// routes

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/blog", blogRoute);
app.use("/api/v1/category", categoryRoute);

// rest apies
app.get("/", (req, res) => {
  res.send("Server Setup");
});

// Ports

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server Started ");
});
