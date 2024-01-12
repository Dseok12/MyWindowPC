
import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";


const app = express();
const logger = morgan("dev");

app.set("view engine", "pug")

/** 프론트단 보이게 하는 코드 */
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));

app.use(session({
  secret: "hello!",
  resave: true,
  saveUninitialized: true,
}));

app.use((req, res, next) => {
  req.sessionStore.all((error, sessions) => {
    console.log(sessions);
    next();
  })
});

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id}\n${req.session.potato}`)
})

app.use("/", rootRouter)
app.use("/users", userRouter)
app.use("/videos", videoRouter)

export default app;

