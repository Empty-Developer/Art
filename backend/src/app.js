import express from "express";
import cors from "cors";

// import routes
import authRoutes from "./routes/authRoutes.js";
import pictureRoutes from "./routes/pictureRoutes.js";

const app = express();

// body parsing middlewares
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// registration, login
app.use("/auth", authRoutes);
// create picture, get all picture 
app.use("/picture", pictureRoutes)

export default app;
