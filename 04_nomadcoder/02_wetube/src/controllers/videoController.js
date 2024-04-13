export const trending = (req, res) => {
  res.render("home")
}

export const see = (req, res) => {
  return res.render("watch");
}

export const edit = (req, res) => {
  return res.render("edit");
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