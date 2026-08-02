import express from "express";
import { login, logout, registration } from "../controllers/authControllers.js";

const router = express.Router();

router.post("/registration", registration);
router.post("/login", login);
router.post("/logout", logout);

export default router;
