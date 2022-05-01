const { deleteDocumentByCode } = require("./models/document");
const { updateUserNames } = require("./models/users");
const { UpdateRole } = require("./models/roles");

const Clean = async () => {
  console.log("Clean data");

  let document1 = await deleteDocumentByCode("0008/22");
  console.log("DELETED DOCUMENT: 0008/22", document1.rowCount);

  let document2 = await deleteDocumentByCode("0002/22");
  console.log("DELETED DOCUMENT: 0002/22", document2.rowCount);

  // All data
  let users1 = await updateUserNames({
    first_name: "MWARABU",
    last_name: "Alice",
    middle_name: "Sonya",
    user_id: "0bcb11c2-6828-4c0f-8165-5a49447ec181",
  });
  console.log("USER 1: ", users1.rowCount);

  let users2 = await updateUserNames({
    first_name: "Bongania",
    last_name: "Janvier",
    middle_name: "Kakuru",
    user_id: "2980fce5-6430-43bc-bc7b-c035edd2eb7b",
  });
  console.log("USER 2: ", users2.rowCount);

  let users3 = await updateUserNames({
    first_name: "Lombo",
    last_name: "James",
    middle_name: "KITOKO",
    user_id: "4aed3386-3819-45ba-a4a4-9786119f9ed2",
  });
  console.log("USER 3: ", users3.rowCount);

  // Update domain
  let role1 = await UpdateRole({ role_id: "", role_name: "Réception" });
  console.log("ROLE 1: ", role1.rowCount);

  // Update domain
  let role2 = await UpdateRole({ role_id: "", role_name: "" });
  console.log("ROLE 1: ", role2.rowCount);
};

Clean();
