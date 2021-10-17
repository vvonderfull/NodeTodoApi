const createPath = require("../helpers/create-path");
const handleError = (res, err) => {
  console.log(err);
  res.render(createPath("error"), { title: "ERROR" });
};

const handleErrorApi = (res, err) => {
  res.status(500).send(err);
};

module.exports = { handleError, handleErrorApi };
