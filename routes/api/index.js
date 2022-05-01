const express = require("express");
const router = express.Router();

/**
 * @import Roouters
 */
router.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      msg: "Welcome!",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter(null, error));
  }
});
router.use("/document", require("./Document"));
router.use("/auth", require("./Auth"));
router.use("/roles", require("./Roles"));
router.use("/users", require("./Users"));
router.use("/base", require("./Base"));

module.exports = router;
