import User from "../models/User.js"
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = async (req, res) => {
  console.log(req.body);
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if(password !== password2){
    return res.status(400).render("join", { pageTitle, errorMessage: "비밀번호 불일치." })
  }
  const exists = await User.exists({$or: [{ username }, { email }] });
  if(exists) {
    return res.status(400).render("join", { pageTitle, errorMessage: "이미 존재하는 유저 이름/이메일입니다." })
  }
  try{
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login")
  } catch (error) {
    console.log(error);
    return res.status(400).render("join", {
      pageTitle: "Join",
      errorMessage: error._message
    })
  }
};

export const startGithubLogin = (req, res) => {
  const baseUrl = `https://github.com/login/oauth/authorize`;
  const config = {
    client_id: process.env.GITHUBCLIENTID,
    allow_signup: false,
    scope: "read:email user:email"
  };
  const params = new URLSearchParams(config).toString()
  const finalUrl = `${baseUrl}?${params}`;
  return res.redirect(baseUrl)
}

export const finishGithubLogin = (req, res) => {

}

export const edit = (req, res) => {
  res.send("edit user");
};

export const remove = (req, res) => {
  res.send("Remove User");
};

export const getLogin = (req, res) => {
  res.render("login",{ pageTitle:"Login" });
};

export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  // check if account exists
  const pageTitle = "Login";
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "유저가 존재하지 않음.",
    });
  }
  console.log(user.password)
  // check if password correct
  const ok = await bcrypt.compare(password, user.password);
  if (!ok) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "비번 틀림",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  return res.redirect("/")
}

export const logout = (req, res) => {
  res.send("Logout User");
};

export const see = (req, res) => {
  res.send("See User")
}
