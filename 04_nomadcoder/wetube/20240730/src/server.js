import express from 'express';
import morgan from 'morgan';
import globalRouter from './routers/globalRouter.js';
import videoRouter from './routers/videoRouter.js';
import userRouter from './routers/userRouter.js';

const PORT = 4400;
const app = express();
const logger = morgan('dev');

// 프론트단 확장자 설정
app.set('view engine', 'pug');

// 프론트단 경로 설정
app.set('views', process.cwd() + '/src/views');

// 미들웨어 관리 (라우터)
app.use(logger);
app.use('/', globalRouter);
app.use('/users', userRouter);
app.use('/videos', videoRouter);

const handleListening = () => {
  console.log(`✅ Server listenting on port http://localhost:${PORT} 🚀🚀🚀`);
};

app.listen(PORT, handleListening);
