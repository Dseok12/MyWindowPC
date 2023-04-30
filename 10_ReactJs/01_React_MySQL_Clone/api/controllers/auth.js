import { db } from "../connect.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {

    // 유저 확인
    const q = "SELECT FROM users WHERE username = ?"
    db.query(q,[req.body.username], (err, date) => {
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json("유저가 이미 존재합니다.");
        // 비밀번호 암호화
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(res.body.password, salt);

        const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)";

        const values = [req.body.username, req.body.email, hashedPassword, req.body.name]

        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            return res.status(200).json("회원가입에 성공하였습니다.");
        });
    })

    // 회원가입


}
export const login = (req, res) => {
    
}
export const logout = (req, res) => {

}