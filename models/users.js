const pool = require("../config/db");

// FIND USER BY ID OR EMAIL
const getUserByEmailOrNid = async (email, phone) => {
  try {
    let user = await pool.query(
      "SELECT user_id, email, first_name, last_name, middle_name,status, phone FROM users WHERE email =$1 OR phone=$2",
      [email, phone]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// FIND USER BY ID OR EMAIL
const getUserByEmail = async (email) => {
  try {
    let user = await pool.query(
      "SELECT user_id, email, first_name, last_name, middle_name,status, phone FROM users WHERE email =$1",
      [email]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// CREATE USER
const addNewUser = async (newUser) => {
  const {
    user_id,
    email,
    first_name,
    last_name,
    middle_name,
    password,
    phone,
  } = newUser;
  try {
    let user = await pool.query(
      `INSERT INTO public.users(
        user_id, email, first_name, last_name, middle_name, password,  phone)
        VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [user_id, email, first_name, last_name, middle_name, password, phone]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// LOGIN INTO THE USER
const login = async (email) => {
  try {
    let user = await pool.query(
      "SELECT users.user_id, users.password, users.status, user_to_access.role_id FROM users,user_to_access WHERE user_to_access.user_id = users.user_id AND email = $1 LIMIT 1",
      [email]
    );
    return user;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const getAllUsers = async () => {
  try {
    let data =
      await pool.query(`SELECT users.user_id, email, first_name, last_name, middle_name, phone, user_to_access.role_id, role_name, user_to_access_id, date
    FROM users,user_to_access,roles WHERE users.user_id = user_to_access.user_id AND user_to_access.role_id = roles.role_id`);
    return data;
  } catch (error) {
    return error;
  }
};

// GET USER
const getUserById = async (id) => {
  try {
    let data = await pool.query(
      `SELECT users.user_id, email, first_name, last_name, middle_name, phone, user_to_access.role_id, role_name, user_to_access_id, date, roles.access
      FROM users,user_to_access,roles WHERE users.user_id = user_to_access.user_id AND user_to_access.role_id = roles.role_id AND users.user_id = $1 LIMIT 1`,
      [id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const validateUser = async (id) => {
  try {
    let data = await pool.query(
      "SELECT user_id, password FROM users WHERE user_id = $1 LIMIT 1",
      [id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

// GET ALL USERS
const updateUserPassword = async (id, password) => {
  try {
    let data = await pool.query(
      `UPDATE users SET  password=$1 WHERE user_id = $2`,
      [password, id]
    );

    return data;
  } catch (error) {
    return error;
  }
};

// const updateProfile = async (req) => {
//   const { username, names, dob, gender, nid, email, phone_number, id } = req;
//   try {
//     let data = await pool.query(
//       `UPDATE users SET
//         username=$1,
//         names=$2,
//         dob=$3,
//         gender=$4,
//         nid=$5,
//         email=$6,
//         phone_number=$7
//   WHERE user_id=$8`,
//       [username, names, dob, gender, nid, email, phone_number, id]
//     );

//     return data;
//   } catch (error) {
//     return error;
//   }
// };

/**
 * @description user details on the first login
 * @param {*} district_id
 */
// const updateProfileInfo = async (req) => {
//   const { username, names, dob, gender, id } = req;
//   try {
//     let data = await pool.query(
//       `UPDATE users SET
//         username=$1,
//         names=$2,
//         dob=$3,
//         gender=$4,
//         activated=$5
//       WHERE user_id=$6`,
//       [username, names, dob, gender, 1, id]
//     );

//     console.log(data);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };

module.exports = {
  getUserById,
  getAllUsers,
  login,
  getUserByEmailOrNid,
  addNewUser,
  validateUser,
  updateUserPassword,
  // updateProfile,
  getUserByEmail,
  // ExistEmail,
  // updateProfileInfo,
};
