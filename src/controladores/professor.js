module.exports = {
    get: (req, res) => {
        return res.send('[GET] Professor');
    },
    post: (req, res) => {
        return res.send('[POST] Professor');
    },
    delete: (req, res) => {
        return res.send('[DELETE] Professor');
    },
    patch: (req, res) => {
        return res.send('[PATCH] Professor');
    }
};