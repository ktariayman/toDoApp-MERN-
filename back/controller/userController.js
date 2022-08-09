// @desc Register new user
// @route Post /api/users
// @access Public

const registerUser = () => {
  res.json({ msj: "register user" });
};

// @desc login a user
// @route Post /api/users/login
// @access Public

const loginUser = () => {
  res.json({ msj: "login user" });
};

// @desc get user data
// @route Post /api/users/getUser
// @access Public

const getUser = () => {
  res.json({ msj: "display user data" });
};
module.exports = { registerUser, loginUser, getUser };
