const pool = require("../config/db");

/**
 * @func      Exist()
 * @argument  target_id
 * @desc      Check if the achivements exixts by its id
 */
const isExist = async (indicator_id, plan_id, id) => {
  try {
    let data = await pool.query(
      `SELECT id FROM achivement_list WHERE id = $1 AND plan_id = $2 AND indicator_id = $3 AND status = $4`,
      [id, plan_id, indicator_id, 1]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      isExistNid()
 * @argument  {}
 * @desc      Check if the achivements exixts by its id
 */
const isExistNid = async (indicator_id, plan_id, id) => {
  try {
    let data = await pool.query(
      `SELECT nid FROM achivement_list WHERE nid = $1 AND plan_id = $2 AND indicator_id = $3 AND status = $4`,
      [id, plan_id, indicator_id, 1]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      isExist()
 * @argument  target_id
 * @desc      CHeck if the plan has a draft
 */
const CreateAchivement = async (data) => {
  try {
    const {
      nid,
      id,
      names,
      status,
      date,
      details,
      plan_id,
      indicator_id,
      millestone_id,
      measurement_id,
      is_pleople,
    } = data;

    let createData = await pool.query(
      `INSERT INTO achivement_list(
        id, 
        nid, 
        names, 
        details, 
        success, 
        plan_id, 
        indicator_id, 
        millestone_id, 
        status, 
        measurement_id, 
        created_date, 
        updated_date, 
        is_pleople)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)`,
      [
        id,
        nid,
        names,
        details,
        status,
        plan_id,
        indicator_id,
        millestone_id,
        1,
        measurement_id,
        date,
        date,
        is_pleople,
      ]
    );

    if (createData.rowCount === 1) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * @func      UpdateAchivement()
 * @argument  target_id
 * @desc      CHeck if the plan has a draft
 */
const UpdateAchivement = async (data) => {
  try {
    const {
      nid,
      id,
      names,
      status,
      date,
      details,
      millestone_id,
      measurement_id,
      is_pleople,
    } = data;

    let editData = await pool.query(
      `UPDATE achivement_list
        SET names=$1, 
            details=$2, 
            status=$3, 
            millestone_id=$4, 
            success=$5, 
            measurement_id=$6, 
            updated_date=$7, 
            is_pleople=$8,
            id=$9
        WHERE nid= $10`,
      [
        names,
        details,
        1,
        millestone_id,
        status,
        measurement_id,
        date,
        is_pleople,
        id,
        nid,
      ]
    );

    if (editData.rowCount === 1) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * @func      ActivateAchivements()
 * @argument  target_id
 * @desc      CHeck if the plan has a draft
 */
const ActivateAchivements = async ({
  id,
  plan_id,
  indicator_id,
  measurement_id,
  millestone_id,
}) => {
  try {
    let updateData = await pool.query(
      `UPDATE achivement_list
        SET success=$1, measurement_id=$2, updated_date=$3, millestone_id=$4 
      WHERE id = $5 AND plan_id = $6 AND indicator_id = $7`,
      [1, measurement_id, new Date(), millestone_id, id, plan_id, indicator_id]
    );
    // console.log({ updateData });
    if (updateData.rowCount === 1) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * @func      ActivateAchivementsNid()
 * @argument  target_id
 * @desc      Update the achivements status by nid
 */
const ActivateAchivementsNid = async ({
  id,
  plan_id,
  indicator_id,
  measurement_id,
  millestone_id,
}) => {
  try {
    let updateData = await pool.query(
      `UPDATE achivement_list
        SET success=$1, measurement_id=$2, updated_date=$3, millestone_id=$4 
      WHERE nid = $5 AND plan_id = $6 AND indicator_id = $7`,
      [1, measurement_id, new Date(), millestone_id, id, plan_id, indicator_id]
    );
    // console.log({ updateData });
    if (updateData.rowCount === 1) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    return false;
  }
};

/**
 * @func      getAchivementsByMillestone()
 * @argument  draft_id
 * @desc      get achivements by target millestone
 */
const getAchivementsByMillestone = async (draftId) => {
  try {
    let data = await pool.query(
      `SELECT * FROM achivement_list WHERE millestone_id=$1 AND success=1`,
      [draftId]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      getAchivementsByPlan()
 * @argument  plan_id
 * @desc      get achivements by target millestone
 */
const getAchivementsByPlan = async (plan_id) => {
  try {
    let data = await pool.query(
      `SELECT * FROM achivement_list WHERE plan_id=$1`,
      [plan_id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      getAchivementsByPlan()
 * @argument  plan_id
 * @desc      get achivements by target millestone
 */
const getAchivementsByPlanDisabled = async (plan_id) => {
  try {
    let data = await pool.query(
      `SELECT * FROM achivement_list WHERE plan_id=$1  AND success=0`,
      [plan_id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      getAchivementsByIndicator()
 * @argument  draft_id
 * @desc      get achivements by target millestone
 */
const getAchivementsByIndicator = async (indicator_id) => {
  try {
    let data = await pool.query(
      `SELECT * FROM achivement_list WHERE indicator_id=$1`,
      [indicator_id]
    );
    return data;
  } catch (error) {
    return error;
  }
};

/**
 * @func      disableAchivement()
 * @argument  {plan_id}
 * @desc      Update the plan logs
 */
const disableAchivement = async (nid) => {
  try {
    let results = await pool.query(
      `UPDATE achivement_list SET status=$1 WHERE nid=$2`,
      [0, nid]
    );
    return results;
  } catch (error) {
    return error;
  }
};

/**
 * @func      enableAchivement()
 * @argument  {achivement_id}
 * @desc      Update the plan logs
 */
const enableAchivement = async (nid) => {
  try {
    let results = await pool.query(
      `UPDATE achivement_list SET status=$1 WHERE nid=$2`,
      [1, nid]
    );
    return results;
  } catch (error) {
    return error;
  }
};

/**
 * @func      deleteAchivement()
 * @argument  {plan_id}
 * @desc      Update the plan logs
 */
const deleteAchivement = async (nid) => {
  try {
    let results = await pool.query(`DELETE FROM achivement_list WHERE nid=$1`, [
      nid,
    ]);
    return results;
  } catch (error) {
    return error;
  }
};

module.exports = {
  isExist,
  isExistNid,
  CreateAchivement,
  ActivateAchivements,
  ActivateAchivementsNid,
  UpdateAchivement,
  getAchivementsByMillestone,
  getAchivementsByPlan,
  getAchivementsByIndicator,
  deleteAchivement,
  disableAchivement,
  enableAchivement,
  getAchivementsByPlanDisabled,
};
