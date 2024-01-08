import User from "../models/User.js"

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if(password !== password2){
    return res.render("join", { pageTitle, errorMessage: "비밀번호 불일치." })
  }
  const exists = await User.exists({$or: [{ username }, { email }] });
  if(exists) {
    return res.render("join", { pageTitle, errorMessage: "이미 존재하는 유저 이름/이메일입니다." })
  }
  await User.create({
    name,
    username,
    email,
    password,
    location,
  });
  return res.redirect("/login")
};

export const edit = (req, res) => {
  res.send("edit user");
};

export const remove = (req, res) => {
  res.send("Remove User");
};

export const login = (req, res) => {
  res.send("Login User");
};

export const logout = (req, res) => {
  res.send("Logout User");
};

export const see = (req, res) => {
  res.send("See User")
}
