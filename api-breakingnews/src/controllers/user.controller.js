const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // verificando se todos os campos foram preenchidos
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }
  res.status(201).send({
    user: {
      name,
      username,
      email,
      //password,
      avatar,
      background,
    },
    message: "User created successfully",
  });
};

module.exports = { create };
