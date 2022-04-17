const generateDocumentCode = (total = "") => {
  let fullYear = new Date().getFullYear() + "";
  let yearCode = fullYear.slice(2, 4);
  let zeros_to_add = 4 - total.toString().length;
  let zeros = "";
  if (zeros_to_add === 4) zeros = "0000";
  if (zeros_to_add === 3) zeros = "000";
  if (zeros_to_add === 2) zeros = "00";
  if (zeros_to_add === 1) zeros = "0";

  return `${zeros}${+total + 1}/${yearCode}`;
};

module.exports = generateDocumentCode;
