import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import { localsMiddleware } from "./middlewares.js";
import MongoStore from "connect-mongo";



const app = express();
const logger = morgan("dev");

app.set("view engine", "pug")

/** 프론트단 보이게 하는 코드 */
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: process.env.COOKIE_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie:{
    maxAge: 200000,
  },
  store: MongoStore.create({mongoUrl:process.env.DB_URL}),
}));

app.use(localsMiddleware)
app.use("/", rootRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

export default app;

