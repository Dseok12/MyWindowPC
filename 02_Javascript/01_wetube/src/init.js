import 'dotenv/config';
import "./db.js";
import "./models/Video.js";
import "./models/User.js"
import app from "./server.js";

const POST = 4000;

/** 서버 시작 */
const handleListening = () => {console.log(`http://localhost:${POST}`)}

app.listen(POST, handleListening);
/** 서버 시작 */