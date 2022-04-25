const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// Get the active year
const getDomains = async () => {
  try {
    let data = await pool.query(
      "SELECT domain_id, domain_name, status FROM domains WHERE status = '1';"
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

module.exports = {
  getDomains,
};
