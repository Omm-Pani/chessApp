const { validateLength, validateUsername } = require("./valdation");
const User = require("./models/User");

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, password } = req.body;

    if (!validateLength(password, 6, 40)) {
      return res.status(400).json({
        message: "password must be atleast 6 characters.",
      });
    }

    let tempUsername = first_name + last_name;
    let newUsername = await validateUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      username: newUsername,
      password,
    }).save();

    res.send({
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      password: user.password,
      message: "Register success!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (username === null) {
      return res.status(400).json({
        message: "fields cannot be empty",
      });
    }

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({
        message: "you entered a wrong username",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        message: "invalid credentials",
      });
    }

    res.send({
      id: user._id,
      username: user.username,
      first_name: user.first_name,
      last_name: user.last_name,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
