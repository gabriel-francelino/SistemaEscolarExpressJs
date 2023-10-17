module.exports = {
    get: (req, res) => {
        return res.send('[GET] Aluno');
    },
    post: (req, res) => {
        return res.send('[POST] Aluno');
    },
    delete: (req, res) => {
        return res.send('[DELETE] Aluno');
    },
    patch: (req, res) => {
        return res.send('[PATCH] Aluno');
    }
};