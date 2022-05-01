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

const UpdateRole = async ({ role_name, role_id }) => {
  try {
    let data = await pool.query(
      `UPDATE roles SET  role_name=$1 WHERE role_id=$2`,
      [role_name, role_id]
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

const UserRoles_ENUM = {
  EXPERT: "EXPERT",
  GOVENEUR: "GOVENEUR",
  SOUS_GOVENER: "SOUS_GOVENER",
  MINISTOR: "MINISTOR",
  CECAT: "CECAT",
  EXPEDITION: "EXPEDITION",
  SECRETARY: "SECRETARY",
  CABINET_OFFICE: "CABINET_OFFICE",
  CONSEILLER: "CONSEILLER",
  DIRECTOR: "DIRECTOR",
};
module.exports = {
  CreateAccess,
  getRoles,
  CreateRole,
  UserRoles_ENUM,
  UpdateRole,
};
