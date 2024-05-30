let videos = [
  {
    title: "Video #1",
    rating: 1,
    comments: 21,
    createdAt: "2 min ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video #2",
    rating: 1,
    comments: 3,
    createdAt: "7 min ago",
    views: 52,
    id: 2,
  },
  {
    title: "Video #3",
    rating: 1,
    comments: 9,
    createdAt: "4 min ago",
    views: 6,
    id: 3,
  },
]

export const trending = (req, res) => {
  res.render("home", {pageTitle: "Home", videos })
}

export const watch = (req, res) => {
  const { id }= req.params; // id 값을 가져오기 위해서는 req.params로 id값을 가져와야한다.
  const video = videos[ id - 1 ];
  return res.render("watch", {pageTitle: `Watch ${video.title}`, video});
}

export const getEdit = (req, res) => {
  const { id }= req.params; // id 값을 가져오기 위해서는 req.params로 id값을 가져와야한다.
  const video = videos[ id - 1 ];
  return res.render("edit", {pageTitle: `Edit ${video.title}`, video});
}

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[ id - 1 ].title = title;
  return res.redirect(`/videos/${id}`)
}

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: `Upload Video` })
}

export const postUpload = (req, res) => {
  // 여기서 비디오를 비디오 배열에 추가할 예정
  const { title } = req.body;
  const newVideo = {
    title,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  return res.send("deleteVideo User")
}