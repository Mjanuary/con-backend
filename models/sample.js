const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// Get the active year
const getActiveAcademic = async () => {
  try {
    let data = await pool.query(
      "SELECT * FROM accademic_year WHERE status='1' LIMIT 1"
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

module.exports = {
  getActiveAcademic,
};
