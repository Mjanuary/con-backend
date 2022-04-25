const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// Get the active year
const getAccessByUserId = async (user_id) => {
  try {
    let data = await pool.query(
      `SELECT roles.role_name, roles.access, roles.constant, user_to_access.user_to_access_id, user_to_access.user_id, user_to_access.role_id, user_to_access.date, domains.domain_id,domains.domain_name
      FROM user_to_access,domains,roles 
      WHERE 
          user_to_access.domain_id = domains.domain_id
          AND user_to_access.role_id = roles.role_id
          AND user_to_access.status = 1 
          AND domains.status = 1
          AND roles.status = 1 
          AND user_to_access.user_id = $1`,
      [user_id]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

module.exports = {
  getAccessByUserId,
};
