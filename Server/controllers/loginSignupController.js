const User = require("../models/userModal");
const jwt = require("jsonwebtoken");
const {v4: uuidv4} = require("uuid")

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// user login function
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login( email, password );

    // creating a user token
    const token = jwt.sign(user.toJSON(), email, {
      expiresIn: 60*24,
    })

    res.status(200).json({ UserId: user.UserId, name: user.name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//  user signup for website
const signupUser = async (req, res) => {
  const { name, email, password } = req.body;
 


  try {
    const UserId = uuidv4()
    const user = await User.signup( UserId, name, email, password);

    // createating a token for user
    // const token = createToken(user._id);
    const token = jwt.sign(user.toJSON(), email, {
      expiresIn: 60*24,
    })



    res.status(200).json({ UserId, name, email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { signupUser, loginUser };
