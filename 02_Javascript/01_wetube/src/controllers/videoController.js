import Video from "../models/Video.js";

// Video.find({}, (error, videos) => {});

export const home = async(req, res) => {
  const videos = await Video.find({}).sort({createAt:"desc"});
  return res.render("home", { pageTitle: "Home", videos });
};



export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video)
  // if(video===null){
  if(!video){
    return res.render("404", {pageTitle: `없는 페이지`, video});
  }
  return res.render("watch", {pageTitle: `Watching`, video});
};



export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if(!video){
    return res.status(404).render("404", {pageTitle: `없는 페이지`, video});
  }
  return res.render("edit", {pageTitle: `Editing: ${video.title}`, video});
};



export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if(!video){
    return res.status(404).render("404", {pageTitle: `없는 페이지`, video});
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
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
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch(error) {
    console.log(error);
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message
    })
  }
}

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  console.log(id)
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
}

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if(keyword) {
    // search
    videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos })
}

