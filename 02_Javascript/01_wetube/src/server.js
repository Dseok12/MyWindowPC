
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug")

/** 프론트단 보이게 하는 코드 */
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use("/", globalRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

export default app;

