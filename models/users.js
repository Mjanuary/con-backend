const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// FIND USER BY ID OR EMAIL
const getUserByEmailOrNid = async (email, phone) => {
  try {
    let user = await pool.query(
      "SELECT user_id, email, first_name, last_name, middle_name,status, phone FROM users WHERE email =$1 OR phone=$2",
      [email, phone]
    );
    return user;
  } catch (error) {
    errorDisplay(error);
    return ERROR_TEXT;
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
    errorDisplay(error);
    return ERROR_TEXT;
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
    errorDisplay(error);
    return ERROR_TEXT;
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
    errorDisplay(error);
    return ERROR_TEXT;
  }
};

// GET ALL USERS
const getAllUsers = async () => {
  try {
    let data = await pool.query(
      `SELECT user_id, email, first_name, last_name, middle_name, password, status, phone FROM users WHERE status = 1`
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    return ERROR_TEXT;
  }
};

// GET USER
const getUserById = async (id) => {
  try {
    let data = await pool.query(
      `SELECT user_id, email, first_name, last_name, middle_name, status, phone FROM users WHERE user_id = $1 AND status = 1 LIMIT 1`,
      [id]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    return ERROR_TEXT;
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
    errorDisplay(error);
    return ERROR_TEXT;
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
    errorDisplay(error);
    return ERROR_TEXT;
  }
};

// FIND USER BY ID OR EMAIL
const updateUserNames = async ({
  first_name,
  last_name,
  middle_name,
  user_id,
}) => {
  try {
    let user = await pool.query(
      "UPDATE users SET first_name=$1, last_name=$2, middle_name=$3 WHERE user_id=$4",
      [first_name, last_name, middle_name, user_id]
    );
    return user;
  } catch (error) {
    errorDisplay(error);
    return ERROR_TEXT;
  }
};

module.exports = {
  getUserById,
  getAllUsers,
  login,
  getUserByEmailOrNid,
  addNewUser,
  validateUser,
  updateUserPassword,
  getUserByEmail,
  updateUserNames,
};
