const Category = require("../models/category");
const {handleErrorApi} = require("../helpers/handleError");

const getCategories = (req, res) => {
    Category.find()
        .then((items) => {
            res.status(200).json(items);
        })
        .catch((err) => {
            handleErrorApi(res, err);
        });
};
const addCategory = (req, res) => {
    const {name} = req.body;
    const CategoryModel = new Category({name});
    CategoryModel
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
