const express = require("express");
// const { check, validationResult } = require("express-validator");
const errorFormatter = require("../../controllers/errorFormatter");
const auth = require("../../middleware/auth"); // Middleware

// Models
const Roles = require("../../models/roles");
const Domains = require("../../models/domains");
const DocumentStatus = require("../../models/priority");
const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    let roles = await Roles.getRoles();
    let domains = await Domains.getDomains();

    return res.status(200).json({
      roles: roles.rows,
      domains: domains.rows,
      priorities: DocumentStatus.getAll,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter(null, error));
  }
});

module.exports = router;
