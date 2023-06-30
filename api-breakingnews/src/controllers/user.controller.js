const userService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  // verificando se todos os campos foram preenchidos
  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({ message: "Submit all fields for registration" });
  }

  const user = await userService.create(req.body);

  if (!user) {
    return res.status(404).send({ message: "Error creating user" });
  }

  res.status(201).send({
    user: {
      id: user._id,
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
