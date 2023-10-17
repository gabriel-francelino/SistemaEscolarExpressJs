module.exports = {
    get: (req, res) => {
        return res.send('[GET] Curso');
    },
    post: (req, res) => {
        return res.send('[POST] Curso');
    },
    delete: (req, res) => {
        return res.send('[DELETE] Curso');
    },
    patch: (req, res) => {
        return res.send('[PATCH] Curso');
    }
};