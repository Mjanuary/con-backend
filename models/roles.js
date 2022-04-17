const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// Get the active year
const getRoles = async () => {
  try {
    let data = await pool.query("SELECT * FROM roles");
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

const CreateRole = async ({ role_name, access }) => {
  try {
    let data = await pool.query(
      "INSERT INTO roles(role_name, access) VALUES ($1, $2)",
      [role_name, access]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

const CreateAccess = async ({ user_id, role_id, domain_id }) => {
  try {
    let data = await pool.query(
      `INSERT INTO user_to_access(
         user_id, role_id, date, domain_id)
        VALUES ($1, $2, $3, $4)`,
      [user_id, role_id, new Date(), domain_id]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

module.exports = {
  CreateAccess,
  getRoles,
  CreateRole,
};
