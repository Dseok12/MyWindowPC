import express from "express";
import {
  watch,
  getEdit,
  upload,
  deleteVideo,
  postEdit,
  getUpload,
  postUpload
} from "../controllers/videoController.js";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/upload", getUpload)
// videoRouter.post("/upload", postUpload)
videoRouter.route("/upload").get(getUpload).post(postUpload)

export default videoRouter;