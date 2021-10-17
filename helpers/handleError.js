const handleErrorApi = (res, err) => {
    res.status(500).send(err);
};

module.exports = {handleErrorApi};
