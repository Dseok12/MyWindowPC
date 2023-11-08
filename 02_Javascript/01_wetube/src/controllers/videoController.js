import Video from "../models/Video.js";

export const home = (req, res) => {
  console.log("Start");
  Video.find({}, (error, videos) => {
    console.log("Finished");
    return res.render("home", { pageTitle: "Home", videos });
  });
  console.log("I finish first");
};

export const watch = (req, res) => {
  const { id } = req.params;
  res.render("watch", {pageTitle: `Watching`});
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", {pageTitle: `Editing`});
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
}

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` })
}

export const postUpload = (req, res) => {
  // 여기서 비디오를 비디오 배열에 추가할 예정
  const { title } = req.body;
  return res.redirect("/")
}

