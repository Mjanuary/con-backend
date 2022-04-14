const pool = require("../config/db");

// Get the active year
const getUserDistrictPrivilegeNames = async () => {
  try {
    let data = await pool.query(
      "SELECT udp_id, udp_title FROM users_district_privilege WHERE status = 1"
    );
    return data;
  } catch (error) {
    return error;
  }
};

// Get the active year
const getUserPlanPrivilegeNames = async () => {
  try {
    let data = await pool.query(
      "SELECT privilege_id, privilege_title FROM users_plan_privilege WHERE status = 1"
    );
    return data;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getUserDistrictPrivilegeNames,
  getUserPlanPrivilegeNames,
};
