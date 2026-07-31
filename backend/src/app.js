import express from "express";

// import routes
import authRoutes from "./routes/authRoutes.js";

const app = express();

// body parsing middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// registration, login
app.use("/auth", authRoutes);

export default app;
