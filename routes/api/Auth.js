const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const uuid = require("uuid");
const { check, validationResult } = require("express-validator");
const errorFormatter = require("../../controllers/errorFormatter");

const auth = require("../../middleware/auth");
// const Assets = require("../../controllers/Assets");

// Models
const User = require("../../models/users");
const Roles = require("../../models/roles");

//setting router
const router = express.Router();

/**
 * @route   POST auth/register
 * @desc    Insert new user by admin
 * @access  Public
 */
router.post(
  "/register",
  [
    check("email", "Le email est invalide").isEmail(),
    check("phone", "Le numéro de téléphone est requis").not().isEmpty(),
    check("first_name", "Le prénom est requis").not().isEmpty(),
    check("last_name", "Le nom de famille est obligatoire").not().isEmpty(),
    check("middle_name", "le deuxième prénom est obligatoire").not().isEmpty(),
    check("role", "rôle est requis").not().isEmpty(),
    check("password", "le mot de passe est requis").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, phone, first_name, last_name, middle_name, password, role } =
      req.body;

    try {
      // CHECK IF THE USER EXISTS
      let user = await User.getUserByEmailOrNid(email, phone);
      if (user.rowCount > 0) {
        return res
          .status(400)
          .json(
            errorFormatter(
              "L'e-mail ou l'identifiant ou le numéro de téléphone est déjà dans le système"
            )
          );
      } // user exist

      // START TO CREATE A USER
      const userPassword = password;
      const userId = uuid.v4();

      const newUser = {
        user_id: userId,
        email,
        phone,
        password: userPassword,
        first_name,
        last_name,
        middle_name,
        phone,
      };

      // register user
      const salt = await bcrypt.genSalt(10);
      newUser.password = await bcrypt.hash(userPassword, salt);

      let registerNewUser = await User.addNewUser(newUser);

      if (registerNewUser.rowCount > 0) {
        // hide the password
        registerNewUser.password = null;
      } else {
        return res
          .status(400)
          .json(errorFormatter("échec de la création de l'utilisateur"));
      }

      let AddRoleToUser = await Roles.CreateAccess({
        role_id: role,
        user_id: userId,
      });

      if (AddRoleToUser.rowCount <= 0) {
        // hide the password
        return res
          .status(400)
          .json(
            errorFormatter("Impossible d'accorder l'accès à l'utilisateur")
          );
      }

      console.table({
        username: newUser.email,
        password: userPassword,
      });

      delete newUser.password; // clear the password

      return res.status(200).json({
        msg: "utilisateur créé avec succès",
        user: newUser,
        role_id: role,
      });
    } catch (error) {
      console.log({ ...error });
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            error: error,
          },
        ],
      });
    }
  }
);

// /**
//  * @route   POST auth/login
//  * @desc    Login the user
//  * @access  Public
//  */
router.post(
  "/login",
  [
    check("email", "Le email est invalide").isEmail(),
    check("password", "le mot de passe est requis").not().isEmpty(),
  ],
  async (req, res) => {
    //checking errors
    const errors = validationResult(req);
    // const customErrors = [];
    // const peformedTask = [];
    // let responce = {};

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    try {
      // CHECK IF THE USER EXISTS
      let DBuser = await User.login(email);

      if (DBuser.rowCount <= 0) {
        // customErrors.push("Failed to login");
        return res.status(400).json({
          errors: [
            {
              msg: "votre email ou votre mot de passe sont incorrects",
              error: null,
            },
          ],
        });
      }

      // once the users are not conencted to the database they will see this error
      if (DBuser === undefined) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Erreur de connexion!" }] });
      }

      const user = DBuser.rows[0];
      // check if the password matches
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: "votre email ou votre mot de passe sont incorrects",
              error: null,
            },
          ],
        });
      }

      // create a payload
      const payload = {
        user: {
          id: user.user_id,
          role: user.role_id,
        },
      };

      // Return jsonwebtoken (allow to loggin and login automatically)
      jwt.sign(
        // sign
        payload,
        config.get("jwtSecret"),
        { expiresIn: 56000 },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token }); // send it back to the client
        }
      );
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        errors: [
          {
            msg: "erreur du serveur",
            errormsg: error.message,
            error: error,
          },
        ],
      });
    }
  }
);

/**
 * @route   Get user/me
 * @access  Private
 * @desc    Load user and auth rules
 * @desc    load the users details and the Financial general report,
 * @desc    once there is no financial general report, the function will create one and assign it to the district,
 */
router.get("/me", auth, async (req, res) => {
  try {
    const userId = req.user.id;
    let user = await User.getUserById(userId);

    if (user.rows.length <= 0)
      return res
        .status(500)
        .json(
          errorFormatter(
            "Échec du chargement de votre profil, réessayez plus tard",
            error
          )
        );

    return res.status(200).json(user.rows[0]);
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter("erreur du serveur", error));
  }
});

module.exports = router;
