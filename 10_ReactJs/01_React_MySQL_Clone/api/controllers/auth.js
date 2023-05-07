import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

    // 유저 확인
    const q = "SELECT * FROM users WHERE username = ?"
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
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(404).json("사용자를 찾을 수 없습니다.");
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)

        if(!checkPassword) return res.status(400).json("잘못된 사용자 정보입니다.");

        const token = jwt.sign({id:data[0].id}, "secretkey");

        const {password, ...others} = data[0]

        req.cookie("accessToken", token, {
            httpOnly: true,
        }).status(200).json(others)

    })
}
export const logout = (req, res) => {
    res.clearCookie("accessToken", {
        secure: true,
        sameSite: "none"
    }).status(200).json("유저가 로그아웃 하였습니다.");
}