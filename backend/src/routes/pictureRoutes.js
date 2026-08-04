import express from "express";
import { createPicture } from "../controllers/pictureControllers.js" 

const router = express.Router();

// router.get("all-picture", getAllPicture)
router.post("/create-picture-post", createPicture)

export default router;