const Category = require("../models/category");
const { handleErrorApi } = require("../helpers/handleError");

const getCategories = (req, res) => {
  Category.find()
    .sort({ createdAt: -1 })
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      handleErrorApi(res, err);
    });
};
const addCategory = (req, res) => {
  const { name } = req.body;
  const Category = new Category({ name });
  Category
    .save()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      handleErrorApi(res, err);
    });
};

module.exports = {
  getCategories,
  addCategory,
};
