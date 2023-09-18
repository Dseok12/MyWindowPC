export const trending = (req, res) => {
  res.render("home")
};

export const see = (req, res) => {
  res.send(`Watch Video #${req.params.id}`);
};

export const edit = (req, res) => {
  res.send("Edit");
};

export const search = (req, res) => {
  res.send("Search User");
};

export const upload = (req, res) => {
  res.send("Upload User");
};

export const deleteVideo = (req, res) => {
  res.send("DeleteVideo User");
};
