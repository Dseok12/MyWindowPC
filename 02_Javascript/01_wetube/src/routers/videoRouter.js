import express from "express";
import { watch, edit, upload, deleteVideo } from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch)
videoRouter.get("/:id(\\d+)/edit", edit)
videoRouter.get("/:id(\\d+)/delete", deleteVideo)
videoRouter.get("/upload", upload)

export default videoRouter;