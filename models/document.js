const pool = require("../config/db");
const { ERROR_TEXT, errorDisplay } = require("../config/config");

// Get the number of all documents
const getTotalDocuments = async () => {
  try {
    let data = await pool.query(
      "SELECT COUNT(document_id) AS counts FROM documents WHERE status='1'"
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

const createDocument = async ({
  document_id,
  document_code,
  document_url,
  document_reference_code,
  registered_by_id,
  registered_date,
  owner_name,
  owner_institute,
  owner_phone,
  owner_email,
}) => {
  try {
    let data = await pool.query(
      `INSERT INTO documents(
        document_id, document_code, document_url, document_reference_code, registered_by_id, registered_date, owner_name, owner_institute, owner_phone, owner_email)
        VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)`,
      [
        document_id,
        document_code,
        document_url,
        document_reference_code,
        registered_by_id,
        registered_date,
        owner_name,
        owner_institute,
        owner_phone,
        owner_email,
      ]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

// ,document_reference_code
// ,domain_id
// ,priority_id
// ,institute_id
// ,minister_view
// ,minister_view_date
// ,minister_id
// ,minister_comment
// ,cecat_view
// ,cecat_view_date
// ,cecat_id
// ,director_view
// ,director_view_date
// ,director_id
// ,director_comment
// ,governor_view
// ,governor_signed
// ,governor_id
// ,governor_comment
// ,expert_view
// ,expert_view_date
// ,expert_id
// ,expert_comment
// ,expert_letter
// ,expert_letter_date
// ,expeditor_view
// ,expeditor_id
// ,close
// ,to_print
// ,printed_file_url
// ,closed
// ,governor_access
// ,expert_access
// ,expeditor_access
// ,director_access
// ,governor_comment_access
// ,expert_comment_access
// ,director_cimment_access
// ,ministor_access
// ,ministor_comment_access
// ,status
// ,owner_name
// ,owner_institute
// ,owner_phone
// ,owner_email

const getDocumentDetailsById = async (document_id) => {
  try {
    let data = await pool.query(
      "SELECT * FROM documents WHERE status='1' AND document_id = $1",
      [document_id]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

const updateDocument = async ({
  document_id,
  document_reference_code,
  domain_id,
  priority_id,
  institute_id,
  minister_view,
  minister_view_date,
  minister_id,
  minister_comment,
  cecat_view,
  cecat_view_date,
  cecat_id,
  director_view,
  director_view_date,
  director_id,
  director_comment,
  governor_view,
  governor_signed,
  governor_id,
  governor_comment,
  expert_view,
  expert_view_date,
  expert_id,
  expert_comment,
  expert_letter,
  expert_letter_date,
  expeditor_view,
  expeditor_id,
  close,
  to_print,
  governor_access,
  expert_access,
  expeditor_access,
  director_access,
  governor_comment_access,
  expert_comment_access,
  director_comment_access,
  ministor_access,
  ministor_comment_access,
  status,
  owner_name,
  owner_institute,
  owner_phone,
  owner_email,
}) => {
  try {
    let data = await pool.query(
      `UPDATE documents SET
      document_reference_code=$1,
  domain_id=$2,
  priority_id=$3,
  institute_id=$4,
  minister_view=$5,
  minister_view_date=$6,
  minister_id=$7,
  minister_comment=$8,
  cecat_view=$9,
  cecat_view_date=$10,
  cecat_id=$11,
  director_view=$12,
  director_view_date=$13,
  director_id=$14,
  director_comment=$15,
  governor_view=$16,
  governor_signed=$17,
  governor_id=$18,
  governor_comment=$19,
  expert_view=$20,
  expert_view_date=$21,
  expert_id=$22,
  expert_comment=$23,
  expert_letter=$24,
  expert_letter_date=$25,
  expeditor_view=$26,
  expeditor_id=$27,
  close=$28,
  to_print=$29,
  governor_access=$30,
  expert_access=$31,
  expeditor_access=$32,
  director_access=$33,
  governor_comment_access=$34,
  expert_comment_access=$35,
  director_comment_access=$36,
  ministor_access=$37,
  ministor_comment_access=$38,
  status=$39,
  owner_name=$40,
  owner_institute=$41,
  owner_phone=$42,
  owner_email=$43 WHERE document_id = $44
      `,
      [
        document_reference_code,
        domain_id,
        priority_id,
        institute_id,
        minister_view,
        minister_view_date,
        minister_id,
        minister_comment,
        cecat_view,
        cecat_view_date,
        cecat_id,
        director_view,
        director_view_date,
        director_id,
        director_comment,
        governor_view,
        governor_signed,
        governor_id,
        governor_comment,
        expert_view,
        expert_view_date,
        expert_id,
        expert_comment,
        expert_letter,
        expert_letter_date,
        expeditor_view,
        expeditor_id,
        close,
        to_print,
        governor_access,
        expert_access,
        expeditor_access,
        director_access,
        governor_comment_access,
        expert_comment_access,
        director_comment_access,
        ministor_access,
        ministor_comment_access,
        status,
        owner_name,
        owner_institute,
        owner_phone,
        owner_email,
        document_id,
      ]
    );
    return data;
  } catch (error) {
    errorDisplay(error);
    throw ERROR_TEXT;
  }
};

module.exports = {
  updateDocument,
  getTotalDocuments,
  createDocument,
  getDocumentDetailsById,
};
