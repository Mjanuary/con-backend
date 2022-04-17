const express = require("express");
const { check, validationResult } = require("express-validator");
const errorFormatter = require("../../controllers/errorFormatter");
const Upload = require("../../controllers/UploadFiles");
const auth = require("../../middleware/auth"); // Middleware
const Document = require("../../models/document");
const GenerateDocumentCode = require("../../controllers/GenerateDocumentCode");
const { v4: uuidv4 } = require("uuid");
// Models
const router = express.Router();

router.post(
  "/",
  Upload.single("files"),
  auth,
  [
    check("names", "Le nom du rôle est requis").not().isEmpty(),
    check("phone", "L'accès est requis"),
    check("email", "L'accès est requis"),
    check("reference_code", "L'accès est requis"),
    check("institution", "L'accès est requis"),
  ],
  async (req, res, next) => {
    //checking errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const userId = req.user.id;
      const { names, phone, email, reference_code, institution } = req.body;
      const file = req.file;

      if (!file) {
        const error = new Error("Please upload a file");
        error.httpStatusCode = 400;
        return next(error);
      }

      // console.log({ filesList: req.file.filename });
      // console.log({ names, phone, email, reference_code, institution });
      //* Generate code
      let documentNumber = await Document.getTotalDocuments();
      let document_code = GenerateDocumentCode(documentNumber.rows[0].counts);

      console.log({ documentNumber: documentNumber.rows[0].counts });
      const document_id = uuidv4();
      let createDocument = await Document.createDocument({
        document_id,
        document_code,
        document_url: req.file.filename,
        document_reference_code: reference_code,
        registered_by_id: userId,
        registered_date: new Date(),
        owner_name: names,
        owner_institute: institution,
        owner_phone: phone,
        owner_email: email,
      });

      if (createDocument.rowCount <= 0)
        return res
          .status(400)
          .json(errorFormatter("Échec de l'enregistrement du document", error));

      return res.status(200).json({
        msg: "nouveau rôle créé avec succès",
        document_code: document_code,
        document_id: document_id,
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json(errorFormatter(null, error));
    }
  }
);

router.put(
  "/",
  auth,
  [
    check("document_id", "Le nom du document est requis").not().isEmpty(),
    check("document_reference_code", ""),
    check("domain_id", ""),
    check("priority_id", ""),
    check("institute_id", ""),
    check("minister_view", ""),
    check("minister_view_date", ""),
    check("minister_id", ""),
    check("minister_comment", ""),
    check("cecat_view", ""),
    check("cecat_view_date", ""),
    check("cecat_id", ""),
    check("director_view", ""),
    check("director_view_date", ""),
    check("director_id", ""),
    check("director_comment", ""),
    check("governor_view", ""),
    check("governor_signed", ""),
    check("governor_id", ""),
    check("governor_comment", ""),
    check("expert_view", ""),
    check("expert_view_date", ""),
    check("expert_id", ""),
    check("expert_comment", ""),
    check("expert_letter", ""),
    check("expert_letter_date", ""),
    check("expeditor_view", ""),
    check("expeditor_id", ""),
    check("close", ""),
    check("to_print", ""),
    check("governor_access", ""),
    check("expert_access", ""),
    check("expeditor_access", ""),
    check("director_access", ""),
    check("governor_comment_access", ""),
    check("expert_comment_access", ""),
    check("director_comment_access", ""),
    check("ministor_access", ""),
    check("ministor_comment_access", ""),
    check("status", ""),
    check("owner_name", ""),
    check("owner_institute", ""),
    check("owner_phone", ""),
    check("owner_email", ""),
  ],
  async (req, res, next) => {
    //checking errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    try {
      const userId = req.user.id;
      let DocumentObj = {
        document_id: req.body.document_id,
      };

      if (req.body.document_reference_code)
        DocumentObj.document_reference_code = req.body.document_reference_code;
      if (req.body.domain_id) DocumentObj.domain_id = req.body.domain_id;
      if (req.body.priority_id) DocumentObj.priority_id = req.body.priority_id;
      if (req.body.institute_id)
        DocumentObj.institute_id = req.body.institute_id;
      if (req.body.minister_view)
        DocumentObj.minister_view = req.body.minister_view;
      if (req.body.minister_view_date)
        DocumentObj.minister_view_date = req.body.minister_view_date;
      if (req.body.minister_id) DocumentObj.minister_id = req.body.minister_id;
      if (req.body.minister_comment)
        DocumentObj.minister_comment = req.body.minister_comment;
      if (req.body.cecat_view) DocumentObj.cecat_view = req.body.cecat_view;
      if (req.body.cecat_view_date)
        DocumentObj.cecat_view_date = req.body.cecat_view_date;
      if (req.body.cecat_id) DocumentObj.cecat_id = req.body.cecat_id;
      if (req.body.director_view)
        DocumentObj.director_view = req.body.director_view;
      if (req.body.director_view_date)
        DocumentObj.director_view_date = req.body.director_view_date;
      if (req.body.director_id) DocumentObj.director_id = req.body.director_id;
      if (req.body.director_comment)
        DocumentObj.director_comment = req.body.director_comment;
      if (req.body.governor_view)
        DocumentObj.governor_view = req.body.governor_view;
      if (req.body.governor_signed)
        DocumentObj.governor_signed = req.body.governor_signed;
      if (req.body.governor_id) DocumentObj.governor_id = req.body.governor_id;
      if (req.body.governor_comment)
        DocumentObj.governor_comment = req.body.governor_comment;
      if (req.body.expert_view) DocumentObj.expert_view = req.body.expert_view;
      if (req.body.expert_view_date)
        DocumentObj.expert_view_date = req.body.expert_view_date;
      if (req.body.expert_id) DocumentObj.expert_id = req.body.expert_id;
      if (req.body.expert_comment)
        DocumentObj.expert_comment = req.body.expert_comment;
      if (req.body.expert_letter)
        DocumentObj.expert_letter = req.body.expert_letter;
      if (req.body.expert_letter_date)
        DocumentObj.expert_letter_date = req.body.expert_letter_date;
      if (req.body.expeditor_view)
        DocumentObj.expeditor_view = req.body.expeditor_view;
      if (req.body.expeditor_id)
        DocumentObj.expeditor_id = req.body.expeditor_id;
      if (req.body.close) DocumentObj.close = req.body.close;
      if (req.body.to_print) DocumentObj.to_print = req.body.to_print;
      if (req.body.governor_access)
        DocumentObj.governor_access = req.body.governor_access;
      if (req.body.expert_access)
        DocumentObj.expert_access = req.body.expert_access;
      if (req.body.expeditor_access)
        DocumentObj.expeditor_access = req.body.expeditor_access;
      if (req.body.director_access)
        DocumentObj.director_access = req.body.director_access;
      if (req.body.governor_comment_access)
        DocumentObj.governor_comment_access = req.body.governor_comment_access;
      if (req.body.expert_comment_access)
        DocumentObj.expert_comment_access = req.body.expert_comment_access;
      if (req.body.director_comment_access)
        DocumentObj.director_comment_access = req.body.director_comment_access;
      if (req.body.ministor_access)
        DocumentObj.ministor_access = req.body.ministor_access;
      if (req.body.ministor_comment_access)
        DocumentObj.ministor_comment_access = req.body.ministor_comment_access;
      if (req.body.status) DocumentObj.status = req.body.status;
      if (req.body.owner_name) DocumentObj.owner_name = req.body.owner_name;
      if (req.body.owner_institute)
        DocumentObj.owner_institute = req.body.owner_institute;
      if (req.body.owner_phone) DocumentObj.owner_phone = req.body.owner_phone;
      if (req.body.owner_email) DocumentObj.owner_email = req.body.owner_email;

      let document_db = await Document.getDocumentDetailsById(
        req.body.document_id
      );
      if (document_db.rows.length <= 0)
        return res
          .status(400)
          .json(
            errorFormatter("Invalid document id, please try again later", error)
          );

      let NewDocument = {
        ...document_db.rows[0],
        ...DocumentObj,
      };

      let updateDocument = await Document.updateDocument(NewDocument);
      if (updateDocument.rowCount <= 0)
        return res
          .status(400)
          .json(errorFormatter("Failed to update document", error));

      return res.status(200).json({
        msg: "nouveau rôle créé avec succès",
        document: NewDocument,
        // document_code: document_code,
        // document_id: document_id,
      });
    } catch (error) {
      console.log({ error });
      return res.status(500).json(errorFormatter(null, error));
    }
  }
);

router.get("/", async (req, res) => {
  try {
    let user = await Roles.getRoles();
    return res.status(200).json(user.rows);
  } catch (error) {
    console.log(error);
    return res.status(500).json(errorFormatter(null, error));
  }
});

module.exports = router;
