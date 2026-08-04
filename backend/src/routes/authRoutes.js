import express from "express";
import { login, logout, registration } from "../controllers/authControllers.js";
import { validate } from "../middleware/validate.js";
import {registrationModel, loginModel} from "../models/authModel.js"
const router = express.Router();

router.post("/registration", validate(registrationModel), registration);
router.post("/login", validate(loginModel), login);
router.post("/logout", logout);

export default router;
