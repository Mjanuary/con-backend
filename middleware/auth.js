const jwt = require("jsonwebtoken");
const config = require("config");
const errorFormatter = require("../controllers/errorFormatter");

module.exports = function (req, res, next) {
  // Get token from the feader
  const token = req.header("x-auth-token");

  // check if no token
  if (!token) {
    return res
      .status(401)
      .json(errorFormatter("Pas de jeton, autorisation refusée"));
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Le jeton n'est pas valide" });
  }
};
