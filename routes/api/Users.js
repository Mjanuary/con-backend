const express = require("express");
const config = require("config");
const { v4: uuidv4 } = require("uuid");
const errorFormatter = require("../../controllers/errorFormatter");

const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth"); // Middleware
const User = require("../../models/users"); // Models

//setting router
const router = express.Router();

router.put(
  "/",
  [
    check("first_name", "Le prénom est requis").not().isEmpty(),
    check("last_name", "Le nom de famille est obligatoire").not().isEmpty(),
    check("middle_name", "le deuxième prénom est obligatoire").not().isEmpty(),
    check("user_id", "Identite est requis").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { first_name, last_name, middle_name, user_id } = req.body;
    try {
      let UpdateUser = await User.updateUserNames({
        first_name: first_name,
        last_name: last_name,
        middle_name: middle_name,
        user_id: user_id,
      });

      if (UpdateUser.rowCount <= 0) {
        // hide the password
        return res
          .status(400)
          .json(
            errorFormatter("Impossible d'accorder l'accès à l'utilisateur")
          );
      }

      return res.status(200).json({
        msg: "utilisateur updated avec succès",
      });
    } catch (error) {
      console.log({ ...error });
      return res.status(500).json(errorFormatter(null, error));
    }
  }
);

module.exports = router;
