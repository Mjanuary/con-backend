const express = require("express");
const router = express.Router();

/**
 * @import Roouters
 */
router.use("/document", require("./Document"));
router.use("/auth", require("./Auth"));
router.use("/roles", require("./Roles"));
router.use("/users", require("./Users"));

module.exports = router;
