const Contact = require("../models/contacts");
const createPath = require("../helpers/create-path");
const handleError = require("../helpers/handleError");

const getContacts = (req, res) => {
  const title = "Contacts";
  Contact.find()
    .then((contacts) => {
      res.render(createPath("contacts"), { contacts, title });
    })
    .catch((err) => {
      handleError(res, err);
    });
};

module.exports = {
  getContacts,
};
