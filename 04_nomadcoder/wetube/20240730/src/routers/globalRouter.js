import express from "express";
import {
  join,
  login
} from "../controllers/userController.js";
import {
  trending,
  search
} from "../controllers/videoController.js";

const globalRouter = express.Router();

// userController에서 가져옴
globalRouter.get("/", trending);
globalRouter.get("/join", join);

// videoController에서 가져옴
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;