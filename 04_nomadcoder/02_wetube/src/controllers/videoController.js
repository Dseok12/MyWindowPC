export const trending = (req, res) => {
  const videos = [
    {
      title: "Video #1",
      rating: 1,
      comments: 21,
      createdAt: "2 min ago",
      views: 505,
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
  res.render("home", {pageTitle: "Home", videos, })
}

export const see = (req, res) => {
  return res.render("watch", {pageTitle: "Watch"});
}

export const edit = (req, res) => {
  return res.render("edit", {pageTitle: "Edit"});
}

export const search = (req, res) => {
  res.send("search User")
}

export const upload = (req, res) => {
  res.send("upload User")
}

export const deleteVideo = (req, res) => {
  return res.send("deleteVideo User")
}