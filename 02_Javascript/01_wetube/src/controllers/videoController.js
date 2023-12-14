import Video from "../models/Video.js";

// Video.find({}, (error, videos) => {});

export const home = async(req, res) => {
  const videos = await Video.find({});
  return res.render("home", { pageTitle: "Home", videos });
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

export const postUpload = async (req, res) => {
  // 여기서 비디오를 비디오 배열에 추가할 예정
  const { title, description, hashtags } = req.body;
  try{
    await Video.create({
      title: title,
      description: description,
      createAt: Date.now(),
      hashtags: hashtags.split(",").map(word => `#${word}`),
    });
    return res.redirect("/");
  } catch(error) {
    console.log(error);
    return res.render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message
    })
  }
}

