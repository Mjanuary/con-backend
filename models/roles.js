const pool = require("../config/db");

// Get the active year
const getRoles = async () => {
  try {
    let data = await pool.query("SELECT * FROM roles");
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
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
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

const CreateAccess = async ({ user_id, role_id }) => {
  try {
    let data = await pool.query(
      `INSERT INTO user_to_access(
         user_id, role_id, date)
        VALUES ($1, $2, $3)`,
      [user_id, role_id, new Date()]
    );
    return data;
  } catch (error) {
    console.log(error);
    throw "Failed to perform the task, try again later";
  }
};

module.exports = {
  CreateAccess,
  getRoles,
  CreateRole,
};
