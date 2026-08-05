import express from "express";
import { createPicture, getAllPicture, getOnePicture } from "../controllers/pictureControllers.js" 

const router = express.Router();

router.get("/all-picture", getAllPicture)
router.post("/create-picture-post", createPicture)
router.get("/:id", getOnePicture)

export default router;